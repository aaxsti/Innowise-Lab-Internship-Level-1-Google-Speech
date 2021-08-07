import React, {FC} from 'react';
import {colors, Logo} from "../../Global.styled";
import logo from "../../assets/app-logo.png";
import {StyledTitle} from "../StartPage/StartPage.styled";
import AuthForm from "../../components/forms/AuthForm";
import {LoginPageWrapper} from "../LoginPage/LoginPage.styled";
import {Button} from "@material-ui/core";
import {Link, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectUser} from "../../redux/auth/auth.selectors";

const SignUpPage: FC = () => {
    const user = useSelector(selectUser);

    if (user) {
        return <Redirect to={'/start'}/>
    }

    return (
        <LoginPageWrapper>
            <Logo image={logo}/>
            <StyledTitle color={colors.dark} size={30}>
                Sign Up
            </StyledTitle>

            <AuthForm authType={'signup'}/>

            <br/>
            <StyledTitle color={colors.dark} size={14}>
                Already have an account?
            </StyledTitle>
            <br/>
            <Button variant="outlined">
                <Link to={'/login'} style={{textDecoration: 'none'}}>
                    Login
                </Link>
            </Button>
        </LoginPageWrapper>
    );
}

export default SignUpPage;