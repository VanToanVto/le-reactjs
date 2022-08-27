import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
PasswordFeild.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disable: PropTypes.bool,
};

function PasswordFeild(props) {
    const { form, name, label, disable } = props;
    const { errors, formState } = form;
    const hasError = formState.touched[name] && errors[name];
    const [showPass, setShowPass] = useState(false);

    const toggleShowPass = () => {
        setShowPass(x => !x);
    }
    return (



        <FormControl fullWidth margin='normal' variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                as={OutlinedInput}
                id={name}
                type={showPass ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleShowPass}
                            edge="end"
                        >
                            {showPass ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
                disabled={disable}
                error={!!hasError}
                helperText={errors[name]?.message}
            />
        </FormControl>

    );
}

export default PasswordFeild;