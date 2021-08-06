import React, {FC, useEffect} from 'react';
import {LoginPageWrapper} from './LoginPage.styled';

import logo from './../../assets/app-logo.png';
import {colors, Logo} from '../../Global.styled';
import {StyledTitle} from '../StartPage/StartPage.styled';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectUser} from "../../redux/auth/auth.selectors";
import LoginForm from "../../components/forms/LoginForm";


// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {}


const LoginPage: FC<PropsType> = ({history}) => {

    const user = useSelector(selectUser);

    useEffect(() => {
        if (user) {
            history.push('/start')
        }
    }, [history, user])

    return (
        <LoginPageWrapper>
            <Logo image={logo}/>
            <StyledTitle color={colors.dark} size={30}>
                Login
            </StyledTitle>

            <LoginForm/>

        </LoginPageWrapper>
    )
}

export default withRouter(LoginPage);