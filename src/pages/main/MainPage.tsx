import {
  ChangeEvent, FC, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Radio } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { logoutUser } from '../../core/redux/auth/auth.actions';
import { selectUser } from '../../core/redux/auth/auth.selectors';
import WordItem from './components/WordItem/WordItem';
import { fetchWords } from '../../core/redux/words/words.actions';
import WordImage from './components/WordImage/WordImage';
import { selectWordMedia, selectWords } from '../../core/redux/words/words.selectors';
import { Word } from '../../core/interfaces/word';
import { Routes } from '../../core/constants/routes';
import { MainPageWrapper } from './styled/MainPageWrapper.styled';
import { WordsBlock } from './styled/WordsBlock.styled';
import { MenuButton } from './styled/MenuButton.styled';
import { SpeakButton } from './styled/SpeakButton.styled';
import { Input } from '../../core/components/styled/Input.styled';
import { Urls } from '../../core/constants/urls';
import UserManage from './components/UserManage/UserManage';
import { Preloader } from '../../core/components/styled/Preloader.styled';
import { Colors } from '../../core/constants/colors';
import { Sizes } from '../../core/constants/sizes';

type PathParamsType = {}
type PropsType = RouteComponentProps<PathParamsType> & {}

const MainPage: FC<PropsType> = ({ history }) => {
  const [t] = useTranslation();
  const [selectedValue, setSelectedValue] = useState<string>('0');

  const groupNumberList = [0, 1, 2, 3, 4, 5];

  const words = useSelector(selectWords);
  const user = useSelector(selectUser);
  const media = useSelector(selectWordMedia);

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchWords(selectedValue));
  }, [selectedValue, dispatch]);

  const playAudio = (audioSrc: string) => {
    const audio: HTMLAudioElement = new Audio(`${Urls.Media}${audioSrc}`);
    audio?.play();
  };

  const signOutHandler = () => {
    dispatch(logoutUser());
    history.push(Routes.Start);
  };

  if (words.length === 0 || !user) return <Preloader ownColor={Colors.primary} size={Sizes.LargePreloader} />;

  if (!user) history.push(Routes.Start);

  return (
    <MainPageWrapper>
      <div>
        {groupNumberList.map((num, i) => (
          <Radio
            color="primary"
            onChange={handleChange}
            checked={selectedValue === `${num}`}
            value={num}
            key={i}
          />
        ))}
      </div>

      <br />

      <WordImage image={media.image} />

      <br />

      <Input disabled variant="outlined" size="small" />

      <WordsBlock>
        {words.slice(0, 10)
          .map((word: Word) => <WordItem word={word} key={word.id} playAudioHandler={playAudio} />)}

        <MenuButton variant="contained" color="primary">{t('main-page.restart-button')}</MenuButton>
        <SpeakButton variant="contained" color="primary">{t('main-page.speak-button')}</SpeakButton>
        <MenuButton variant="contained" color="primary">{t('main-page.results-button')}</MenuButton>
        <MenuButton variant="contained" color="primary">{t('main-page.statistics-button')}</MenuButton>

      </WordsBlock>

      <UserManage userEmail={user?.userEmail} signOut={signOutHandler} />

    </MainPageWrapper>
  );
};

export default withRouter(MainPage);
