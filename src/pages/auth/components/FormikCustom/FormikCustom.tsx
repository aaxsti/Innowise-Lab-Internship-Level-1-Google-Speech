import { FC } from 'react';
import { FieldAttributes, useField } from 'formik';
import { useSelector } from 'react-redux';
import { TextFieldWrapper } from './TextFieldWrapper.styled';
import { Input } from '../../../../core/components/styled/Input.styled';

const MyTextField: FC<FieldAttributes<{}> & { placeholder: string, ownType: string }> = ({
  placeholder,
  ownType,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextFieldWrapper>
      <Input
        type={ownType}
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
