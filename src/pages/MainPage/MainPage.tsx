import React, {ChangeEvent, useState} from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import {logoutUser} from "../../redux/auth/auth.actions";
import {useDispatch, useSelector} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {selectUser} from "../../redux/auth/auth.selectors";
import {MainPageWrapper} from "./MainPage.styled";
import {Radio} from "@material-ui/core";

type PathParamsType = {}
type PropsType = RouteComponentProps<PathParamsType> & {}

const MainPage: React.FC<PropsType> = ({history}) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const [selectedValue, setSelectedValue] = useState<string>('a');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <MainPageWrapper>
            <div>
                <IconButton
                    children={<ExitToAppIcon/>}
                    onClick={() => {
                        dispatch(logoutUser())
                        history.push('/start')
                    }}
                />
            </div>

            <div>{user?.userEmail}</div>

            <div>
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                />
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                />
                <Radio
                    checked={selectedValue === 'c'}
                    onChange={handleChange}
                    value="c"
                />
                <Radio
                    checked={selectedValue === 'd'}
                    onChange={handleChange}
                    value="d"
                />
                <Radio
                    checked={selectedValue === 'e'}
                    onChange={handleChange}
                    value="e"
                />
                <Radio
                    checked={selectedValue === 'f'}
                    onChange={handleChange}
                    value="f"
                />
            </div>
        </MainPageWrapper>
    );
}

export default withRouter(MainPage);