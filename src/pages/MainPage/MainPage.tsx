import {
  ChangeEvent, FC, useEffect, useState,
} from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Radio, TextField } from '@material-ui/core';
import { logoutUser } from '../../redux/auth/auth.actions';
import { selectUser } from '../../redux/auth/auth.selectors';
import {
  MainPageWrapper,
  MenuButton,
  SpeakButton,
  UserManageBlock,
  WordsBlock,
  RadioGroupWrapper,
} from './MainPage.styled';
import WordItem from '../../components/WordItem/WordItem';
import { fetchWords } from '../../redux/words/words.actions';
import WordImage from '../../components/WordImage/WordImage';
import { selectWordMedia, selectWords } from '../../redux/words/words.selectors';
import { Word } from '../../types/types';

type PathParamsType = {}
type PropsType = RouteComponentProps<PathParamsType> & {}

const MainPage: FC<PropsType> = ({ history }) => {
  const words = useSelector(selectWords);
  const user = useSelector(selectUser);
  const media = useSelector(selectWordMedia);

  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState<string>('0');

  console.log(words, user, selectedValue, 'render');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // RESET GAME STATS
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchWords(selectedValue));
  }, [selectedValue, dispatch]);

  // const handleAdd = () => {
  //   database.ref(`users/${user.userId}`).set({
  //     email: user.userEmail,
  //   }).then(() => console.log('item added'));
  // };

  const groupNumberList = [0, 1, 2, 3, 4, 5];

  const playAudio = (audioSrc: string) => {
    const audio = new Audio(`https://raw.githubusercontent.com/aaxsti/rslang-data/master/${audioSrc}`);
    audio?.play();
  };

  return (
    <MainPageWrapper>
      <RadioGroupWrapper>
        {groupNumberList.map((num, i) => (
          <Radio
            color="primary"
            onChange={handleChange}
            checked={selectedValue === `${num}`}
            value={num}
            key={i}
          />
        ))}
      </RadioGroupWrapper>

      <br />

      <WordImage image={media.image} />

      <br />

      <TextField disabled variant="outlined" size="small" />

      <WordsBlock>
        {words.slice(0, 10)
          .map((word: Word) => <WordItem word={word} key={word.id} playAudioHandler={playAudio} />)}

        <MenuButton variant="contained" color="primary">Restart</MenuButton>
        <SpeakButton variant="contained" color="primary">Speak</SpeakButton>
        <MenuButton variant="contained" color="primary">Results</MenuButton>
        <MenuButton variant="contained" color="primary">Statistics</MenuButton>

      </WordsBlock>

      <UserManageBlock>
        {/* <Button onClick={handleAdd}>Add</Button> */}
        <IconButton
          onClick={() => {
            dispatch(logoutUser());
            history.push('/start');
          }}>
          <ExitToAppIcon />
        </IconButton>
        <span>{user?.userEmail}</span>
      </UserManageBlock>
    </MainPageWrapper>
  );
};

export default withRouter(MainPage);
