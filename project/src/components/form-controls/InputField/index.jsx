import React from 'react';
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    disabled: null
}

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { errors } = form;
    const hasError = errors[name];

    return (
        <Controller
            //bawts buoc phai co
            name={name}
            control={form.control}
            //ui library nao
            as={TextField}

            margin="normal"
            variant="outlined"
            fullWidth
            label={label}
            disabled={disabled}

            error={!!hasError}
            helperText={errors[name]?.message}
            size='small'
        />
    );
}

export default InputField;