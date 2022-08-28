import React from 'react';
import LoginForm from '../LoginForm';

Login.propTypes = {

};

function Login(props) {


    const handleSubmit = async (value) => {



        console.log('Form sub: ', value);


    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;