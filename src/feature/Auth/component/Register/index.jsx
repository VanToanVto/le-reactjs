import React from 'react';
import RegisterForm from '../RegisterForm';

Register.propTypes = {

};

function Register(props) {


    const handleSubmit = async (value) => {



        console.log('Form sub: ', value);


    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;