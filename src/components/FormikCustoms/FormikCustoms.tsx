import React, {FC} from "react";
import {FieldAttributes, useField} from "formik";
import {TextFieldWrapper} from "../../pages/LoginPage/LoginPage.styled";
import {TextField} from "@material-ui/core";

const MyTextField: FC<FieldAttributes<{}>> = ({placeholder, ...props}) => {
    const [field, meta] = useField<{}>(props)
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
        <TextFieldWrapper>
            <TextField
                style={{width: 300}}
                size="small"
                variant="outlined"
                placeholder={placeholder}
                {...field}
                helperText={errorText}
                error={!!errorText}
            />
        </TextFieldWrapper>
    )
}

export default MyTextField;