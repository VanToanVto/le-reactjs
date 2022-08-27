import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../component/form-controll/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, Typography } from '@mui/material';
import './style.css';
import PasswordFeild from '../../../../component/form-controll/PassFeild';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {


    const schema = yup.object().shape({
        fullname: yup.string().required('Enter full name'),
    });
    const form = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            rePass: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (value) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(value);
        }
        form.reset();
    };

    return (
        <div className='modal-content' >
            <Avatar className='avarta'>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography className='title' component="h3" variant="h5">
                Create Account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullname" label="Full name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordFeild name="password" label="Password" form={form} />
                <PasswordFeild name="rePass" label="Retype Password" form={form} />

                <Button type='submit' className='submit' variant='contained' fullWidth >
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;