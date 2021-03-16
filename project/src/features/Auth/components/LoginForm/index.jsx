import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons'
import PasswordField from '../../../../components/form-controls/PasswordField';

const useStyles = makeStyles((theme) => (
    {
        root: {
            position: 'relative',
            paddingTop: theme.spacing(2),
        },

        avatar: {
            margin: '0 auto',
            backgroundColor: theme.palette.secondary.main,
        },

        title: {
            margin: theme.spacing(0, 0, 0, 0),
            textAlign: 'center',
        },

        submit: {
            margin: theme.spacing(2, 0, 2)
        },

        progress: {
            position: 'absolute',
            top: theme.spacing(1),
            left: 0,
            right: 0
        }
    }
))

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const classes = useStyles();
    const { onSubmit } = props;

    const schema = yup.object().shape({
        identifier: yup.string().required('Vui lòng nhập địa chỉ Email!')
            .email('Vui lòng nhập Email hợp lệ'),

        password: yup.string().required('Vui lòng nhập mật khẩu!'),
    });

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
    })
    const handleSubmit = async (value) => {
        if (onSubmit) {
            await onSubmit(value)
        }
    }

    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />}

            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Đăng Nhập
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='identifier' label="Email" form={form} />
                <PasswordField name='password' label="PassWord" form={form} />

                <Button type='Submit' className={classes.submit}
                    variant="contained" color="primary"
                    fullWidth
                    size='small'
                >
                    Đăng Nhập
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;