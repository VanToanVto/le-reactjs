import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';
import { unwrapResult } from '@reduxjs/toolkit'

Register.propTypes = {

};

function Register(props) {
    const dispatch = useDispatch();


    const handleSubmit = async (value) => {


        try {
            console.log('Form sub: ', value);
            const action = register(value);
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction);
        } catch (error) {
            console.log('Failed', error);
        }
    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;