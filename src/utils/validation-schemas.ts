import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .required('Please enter your email')
    .email(),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8)
    .max(12),
});

export const signUpValidationSchema = yup.object({
  email: yup
    .string()
    .required('Please enter your email')
    .email(),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8)
    .max(12)
    .matches(
      /^.*(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must be Latin and contain one uppercase and one number',
    ),
});
