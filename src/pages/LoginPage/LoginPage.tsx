import React, {FC} from 'react';
import {LoginPageWrapper} from './LoginPage.styled';
import logo from './../../assets/app-logo.png';
import {colors, Logo} from '../../Global.styled';
import {StyledTitle} from '../StartPage/StartPage.styled';
import {Link, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectUser} from "../../redux/auth/auth.selectors";
import AuthForm from "../../components/forms/AuthForm";
import {Button} from "@material-ui/core";

const LoginPage: FC = () => {
    const user = useSelector(selectUser);

    if (user) {
        return <Redirect to={'/start'}/>
    }

    return (
        <LoginPageWrapper>
            <Logo image={logo}/>
            <StyledTitle color={colors.dark} size={30}>
                Login
            </StyledTitle>

            <AuthForm authType={'login'}/>

            <br/>
            <StyledTitle color={colors.dark} size={14}>
                Don't have an account?
            </StyledTitle>
            <br/>
            <Button variant="outlined">
                <Link to={'/signup'} style={{textDecoration: 'none'}}>
                    Sign up
                </Link>
            </Button>
        </LoginPageWrapper>
    )
}

export default LoginPage;