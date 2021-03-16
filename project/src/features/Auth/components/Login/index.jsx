import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import LoginForm from '../LoginForm';


Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (value) => {

        try {
            //auto set username = email

            const action = login(value);
            const resultAction = await dispatch(action)
            unwrapResult(resultAction);

            //close dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }
            enqueueSnackbar('Đăng nhập thành công <3', { variant: 'success' });

        } catch (error) {
            console.log('Filde to login', error)
            enqueueSnackbar(error.message, { variant: 'error' });
        }

    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;