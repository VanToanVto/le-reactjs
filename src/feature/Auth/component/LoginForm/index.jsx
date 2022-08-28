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

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {


    const schema = yup.object().shape({


        email: yup.string().required('Please enter email')
            .email('Please enter a valid email address'),

        password: yup.string().required('Enter password')
            .min(6, 'Please enter 6 character'),


    });
    const form = useForm({
        defaultValues: {

            email: '',
            password: '',

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
                Login
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>

                <InputField name="email" label="Email" form={form} />
                <PasswordFeild name="password" label="Password" form={form} />


                <Button type='submit' className='submit' variant='contained' fullWidth >
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;