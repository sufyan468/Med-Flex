import React, { Fragment, useState } from 'react';
import { Grid, Typography, Button, Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../Footer/Footer';
import AppLogo from '../General/LazyLoading/AppLogo';
import { useDispatch } from 'react-redux';
import { showSnackBar } from '../../store/slices/snackbar.slice';
import { loginUser } from '../../store/slices/user.slice';

const defaultFormInput = {
    email: '',
    password: '',
};
const LoginPage = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState(defaultFormInput);

    const snackbarObject = {
        type: '',
        message: '',
        open: false,
    };

    const handleInputChange = (name, value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    const dispatchSnackBar = (type, message, open) => {
        snackbarObject.type = type;
        snackbarObject.message = message;
        snackbarObject.open = open;

        dispatch(showSnackBar(snackbarObject));
    };

    const handleLogin = (e) => {
        e.stopPropagation();
        const loginUserObject = {
            email: formInput.email,
            password: formInput.password,
        };

        if (loginUserObject.email === '') {
            dispatchSnackBar('error', 'Please enter email', true);
        } else if (loginUserObject.password === '') {
            dispatchSnackBar('error', 'Please enter password', true);
        } else {
            dispatch(loginUser({ email: loginUserObject.email, password: loginUserObject.password }));
            dispatchSnackBar('success', 'User created successfully', true);
            navigate('/home');
        }
    };

    return (
        <Fragment>
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
                                Login
                            </Typography>
                            <p style={{ margin: '1rem 0rem' }}>Login to your MedFlex account:</p>
                            <Box component="form" noValidate sx={{ mt: 4 }}>
                                <TextField
                                    sx={{ mb: 2 }}
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    variant="standard"
                                    onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    id="email"
                                    name="password"
                                    autoComplete="password"
                                    type="password"
                                    variant="standard"
                                    onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                />
                                <Box sx={{ mt: 4, textAlign: 'right' }}>
                                    <Button
                                        type="button"
                                        className="button-primary FllWidthBtn"
                                        variant="contained"
                                        sx={{ float: 'right' }}
                                        style={{ padding: '0rem 3rem' }}
                                        onClick={(e) => handleLogin(e)}
                                    >
                                        Sign In
                                    </Button>
                                </Box>
                                <Box sx={{ pt: '10rem', textAlign: 'center' }} className="w-100">
                                    <p>
                                        Don't have an account {''}
                                        <span>
                                            <a
                                                href="/signup"
                                                style={{ color: '#1565c0', fontWeight: 'bold', textDecoration: 'none' }}
                                            >
                                                Click here for Signup
                                            </a>
                                        </span>
                                    </p>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} className="rightSide" />
                </Grid>
                <Footer />
            </Fragment>
        </Fragment>
    );
};

export default LoginPage;
