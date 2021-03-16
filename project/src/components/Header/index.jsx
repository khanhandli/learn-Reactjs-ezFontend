import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
        zIndex: 1
    }
}));

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
}

export default function Header() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [mode, setMode] = useState(MODE.LOGIN);
    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loggedInUser.id;
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget)
    };

    const handleCloseMenu = () => {
        setAnchorEl(null)

    };
    const handleLogOutClick = () => {
        const action = logout();
        dispatch(action)
        handleCloseMenu()
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to="/">Nhu Y Shop</Link>
                    </Typography>

                    <NavLink to="/todo-list" className={classes.link} >
                        <Button color="inherit">
                            Todo-List
                        </Button>
                    </NavLink>

                    <NavLink to="/albums" className={classes.link} >
                        <Button color="inherit">
                            Albums
                        </Button>
                    </NavLink>
                    {!isLoggedIn && (
                        <Button color="inherit" onClick={handleClickOpen} >
                            Đăng Nhập
                        </Button>
                    )}

                    {isLoggedIn && (
                        <IconButton color="inherit" onClick={handleUserClick}>
                            <AccountCircle />
                        </IconButton>
                    )}

                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleLogOutClick}>My account</MenuItem>
                <MenuItem onClick={handleLogOutClick}>Đăng Xuất</MenuItem>
            </Menu>

            <Dialog disableBackdropClick disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">

                <IconButton className={classes.closeButton} onClick={handleClose}>
                    <Close></Close>
                </IconButton>

                <DialogContent>
                    {/* <Register closeDialog={handleClose} />
                    <Login closeDialog={handleClose} /> */}
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />

                            <Box textAlign='center'>
                                <Button color='primary'
                                    onClick={() => setMode(MODE.LOGIN)}
                                >
                                    Đã có tài khoản. Đăng nhập ngay
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />

                            <Box textAlign='center'>
                                <Button color='primary'
                                    onClick={() => setMode(MODE.REGISTER)}
                                >
                                    Đăng ký tài khoản
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>

            </Dialog>
        </div >
    );
}
