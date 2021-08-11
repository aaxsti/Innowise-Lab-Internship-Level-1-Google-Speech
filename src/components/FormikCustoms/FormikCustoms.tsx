import { FC } from 'react';
import { FieldAttributes, useField } from 'formik';
import { TextField } from '@material-ui/core';
import { TextFieldWrapper } from '../../pages/LoginPage/LoginPage.styled';

const MyTextField: FC<FieldAttributes<{}> & { placeholder: string, ownType: string }> = ({
  placeholder,
  ownType,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextFieldWrapper>
      <TextField
        type={ownType}
        style={{ width: 300 }}
        size="small"
        variant="outlined"
        placeholder={placeholder}
        {...field}
        helperText={errorText}
        error={!!errorText}
      />
    </TextFieldWrapper>
  );
};

export default MyTextField;
