import React, {FC} from 'react';
import {authUser} from "../../redux/auth/auth.actions";
import {Form, Formik} from "formik";
import {FormAreaWrapper, FormButtonWrapper} from "../../pages/LoginPage/LoginPage.styled";
import MyTextField from "../FormikCustoms/FormikCustoms";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {loginValidationSchema} from "./validation/validation-schemas";

const LoginForm: FC = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            validateOnChange={true}
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={loginValidationSchema}
            onSubmit={(data, {setSubmitting}) => {
                setSubmitting(true)

                const {email, password} = data

                dispatch(authUser(email, password))

                // dispatch action with login data (saga)
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
                                Login
                            </Button>
                        </FormButtonWrapper>
                    </FormAreaWrapper>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;