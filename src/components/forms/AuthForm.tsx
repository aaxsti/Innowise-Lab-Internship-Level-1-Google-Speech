import { FC } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { loginUser, signUpUser } from '../../redux/auth/auth.actions';
import { FormAreaWrapper, FormButtonWrapper } from '../../pages/LoginPage/LoginPage.styled';
import MyTextField from '../FormikCustoms/FormikCustoms';
import { loginValidationSchema, signUpValidationSchema } from '../../utils/validation-schemas';

interface AuthFormProps {
    authType: 'signup' | 'login'
}

const AuthForm: FC<AuthFormProps> = ({ authType }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      validateOnChange
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={authType === 'login' ? loginValidationSchema : signUpValidationSchema}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);

        const { email, password } = data;

        if (authType === 'login') dispatch(loginUser(email, password));
        else dispatch(signUpUser(email, password));

        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormAreaWrapper>
            <MyTextField
              placeholder="Email"
              ownType="input"
              name="email"
            />

            <MyTextField
              placeholder="Password"
              ownType="password"
              name="password"
            />

            <FormButtonWrapper>
              <Button
                size="large"
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {authType === 'login' ? 'Log in' : 'Sign up'}
              </Button>
            </FormButtonWrapper>
          </FormAreaWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
