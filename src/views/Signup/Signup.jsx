import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/slices/user.slice';
import CssBaseline from '@mui/material/CssBaseline';
import AppLogo from '../../components/General/LazyLoading/AppLogo';
import { Grid, Typography, Box, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { showSnackBar } from '../../store/slices/snackbar.slice';

const defaultFormInput = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
};

const Signup = () => {
    const [formInput, setFormInput] = useState(defaultFormInput);

    const dispatch = useDispatch();

    const data = useSelector((state) => state.user);

    const handleInputChange = (name, value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    // SnackBar Object
    const snackbarObject = {
        type: '',
        message: '',
        open: false,
    };

    // SnackBar
    const dispatchSnackBar = (type, message, open) => {
        snackbarObject.type = type;
        snackbarObject.message = message;
        snackbarObject.open = open;
        dispatch(showSnackBar(snackbarObject));
    };

    const handleSignUp = (e) => {
        e.stopPropagation();
        const signUPDataObject = {
            first_name: formInput.first_name,
            last_name: formInput.last_name,
            username: formInput.username,
            email: formInput.email,
            password: formInput.password,
        };

        if (signUPDataObject.first_name === '') {
            dispatchSnackBar('error', 'Please enter First Name', true);
        } else if (signUPDataObject.last_name === '') {
            dispatchSnackBar('error', 'Please enter Last Name', true);
        } else if (signUPDataObject.username === '') {
            dispatchSnackBar('error', 'Please enter username', true);
        } else if (signUPDataObject.email === '') {
            dispatchSnackBar('error', 'Please enter email', true);
        } else if (signUPDataObject.password === '') {
            dispatchSnackBar('error', 'Please enter password', true);
        } else {
            dispatch(getUser(signUPDataObject));
            dispatchSnackBar('success', 'User created successfully', true);
        }
    };

    return (
        <Fragment>
            <Grid container component="main" sx={{ height: '150vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5}
                    sx={{ pl: 2, pr: 5, pt: 12, pb: 10, background: '#FFFFFF', boxShadow: 'none' }}
                >
                    <Box>
                        <AppLogo />
                        <Typography component="h1" variant="h3" sx={{ mt: 5 }}>
                            Sign up
                        </Typography>
                        <p style={{ margin: '1rem 0rem' }}>Create new account to MedFlex:</p>
                        <Box component="form" noValidate sx={{ mt: 4 }}>
                            <TextField
                                sx={{ mb: 2 }}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                value={formInput.first_name}
                                fullWidth
                                id="first_name"
                                label="First Name"
                                name="first_name"
                                autoComplete="first_name"
                                variant="standard"
                            />
                            <TextField
                                sx={{ mb: 2 }}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                value={formInput.last_name}
                                fullWidth
                                id="last_name"
                                label="Last Name"
                                name="last_name"
                                autoComplete="last_name"
                                variant="standard"
                            />

                            <TextField
                                sx={{ mb: 2 }}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                value={formInput.username}
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                variant="standard"
                            />
                            <TextField
                                sx={{ mb: 2 }}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                value={formInput.email}
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                variant="standard"
                            />
                            <TextField
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                value={formInput.password}
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <Box sx={{ mt: 4, textAlign: 'right' }}>
                                <Button type="button" className="button-transparent">
                                    <Link style={{ textDecoration: 'none' }} color="white" to="/">
                                        Login
                                    </Link>
                                </Button>
                                <Button
                                    type="button"
                                    className="button-primary FllWidthBtn"
                                    variant="contained"
                                    onClick={(e) => handleSignUp(e)}
                                    sx={{ float: 'right' }}
                                    style={{ padding: '0rem 3rem' }}
                                >
                                    Sign Up
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7} className="rightSide" />
            </Grid>
        </Fragment>
    );
};

export default Signup;
