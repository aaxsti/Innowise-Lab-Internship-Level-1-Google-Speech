import { FC } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { loginUser, signUpUser } from '../../../core/redux/auth/auth.actions';
import MyTextField from './FormikCustom/FormikCustom';
import { loginValidationSchema, signUpValidationSchema } from '../../../core/utils/validation-schemas';
import FormAreaWrapper from './styled/FormAreaWrapper.styled';
import FormButtonWrapper from './styled/FormButtonWrapper.styled';

interface AuthFormProps {
    authType: 'signup' | 'login'
}

interface FormData {
    email: string
    password: string
}

const AuthForm: FC<AuthFormProps> = ({ authType }) => {
  const [t] = useTranslation();
  const isLogin = (authType === 'login');

  const dispatch = useDispatch();

  return (
    <Formik
      validateOnChange
      initialValues={{
        email: '',
        password: '',
      } as FormData}
      validationSchema={isLogin ? loginValidationSchema : signUpValidationSchema}
      onSubmit={(data: FormData, { setSubmitting }) => {
        setSubmitting(true);

        const { email, password } = data;

        if (isLogin) dispatch(loginUser(email, password));
        else dispatch(signUpUser(email, password));

        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormAreaWrapper>
            <MyTextField
              placeholder={t('auth-pages.email-placeholder')}
              ownType="input"
              name="email"
            />

            <MyTextField
              placeholder={t('auth-pages.password-placeholder')}
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
                {isLogin ? 'Log in' : 'Sign up'}
              </Button>
            </FormButtonWrapper>
          </FormAreaWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
