import React, {FC} from 'react';
import {loginUser, signUpUser} from "../../redux/auth/auth.actions";
import {Form, Formik} from "formik";
import {FormAreaWrapper, FormButtonWrapper} from "../../pages/LoginPage/LoginPage.styled";
import MyTextField from "../FormikCustoms/FormikCustoms";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {loginValidationSchema, signUpValidationSchema} from "./validation/validation-schemas";

interface AuthFormProps {
    authType: 'signup' | 'login'
}

const AuthForm: FC<AuthFormProps> = ({authType}) => {
    const dispatch = useDispatch();

    return (
        <Formik
            validateOnChange={true}
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={authType === 'login' ? loginValidationSchema : signUpValidationSchema}
            onSubmit={(data, {setSubmitting}) => {
                setSubmitting(true)

                const {email, password} = data

                if (authType === 'login') dispatch(loginUser(email, password))
                else dispatch(signUpUser(email, password))

                setSubmitting(false)
            }}
        >
            {({values, errors, isSubmitting}) => (
                <Form>
                    <FormAreaWrapper>
                        <MyTextField
                            placeholder={"Email"}
                            type={"input"}
                            name={"email"}
                        />

                        <MyTextField
                            placeholder={"Password"}
                            type={"password"}
                            name={"password"}
                        />

                        <FormButtonWrapper>
                            <Button
                                size={'large'}
                                disabled={isSubmitting}
                                variant="contained"
                                color="primary"
                                type="submit">
                                {authType === 'login' ? 'Login' : 'Sign up'}
                            </Button>
                        </FormButtonWrapper>
                    </FormAreaWrapper>
                </Form>
            )}
        </Formik>
    );
}

export default AuthForm;