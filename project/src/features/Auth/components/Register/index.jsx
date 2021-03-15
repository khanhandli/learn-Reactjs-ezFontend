import React from 'react';
import PropTypes from 'prop-types';
import SignUp from '../RegisterForm';

Register.propTypes = {

};

function Register(props) {
    const handleSubmit = (value) => {

    }

    return (
        <div>
            <SignUp onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;