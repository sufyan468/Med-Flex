import React, { useState } from 'react';
import { Grid, Typography, Button, Box, TextField, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showSnackBar } from '../../store/slices/snackbar.slice';
import { isEmailSent } from '../../store/slices/user.slice';
import AppLogo from '../../components/General/LazyLoading/AppLogo';

const defaultFormInput = {
    email: '',
};

const ForgotPassword = () => {
    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState(defaultFormInput);

    const snackbarObject = {
        type: '',
        message: '',
        open: false,
    };

    const dispatchSnackBar = (type, message, open) => {
        snackbarObject.type = type;
        snackbarObject.message = message;
        snackbarObject.open = open;

        dispatch(showSnackBar(snackbarObject));
    };

    const handleInputChange = (name, value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    const handleForgotPsw = (e) => {
        e.stopPropagation();

        const signinDataObject = {
            email: formInput.email,
        };

        if (signinDataObject.email === '') {
            dispatchSnackBar('error', 'Kindly Enter the valid email', true);
        } else {
            dispatch(isEmailSent(signinDataObject.email));
            dispatchSnackBar('success', 'Reset password email generated Successfully', true);
        }
    };

    return (
        <>
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
                        <Typography component="h1" variant="h5" sx={{ mt: 5 }}>
                            Forgot Your Password?
                        </Typography>
                        <p sx={{ py: 3 }}> We’ll email you instructions to reset your password.</p>
                        <Box component="form" noValidate sx={{ mt: 4 }}>
                            <TextField
                                sx={{ mb: 2 }}
                                fullWidth
                                type="email"
                                id="forgot-email"
                                label="Your Email"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                value={formInput.email}
                                variant="standard"
                            />

                            <Box sx={{ mt: 4, textAlign: 'right' }}>
                                <Button type="submit" className="button-transparent FllWidthBtn">
                                    <Link style={{ textDecoration: 'none' }} to="/login">
                                        Login Instead
                                    </Link>
                                </Button>

                                <Button
                                    type="button"
                                    className="button-primary FllWidthBtn"
                                    variant="contained"
                                    onClick={(e) => handleForgotPsw(e)}
                                    sx={{ float: 'right' }}
                                    style={{ padding: '0rem 3rem' }}
                                >
                                    Reset Password
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7} className="rightSide" />
            </Grid>
        </>
    );
};

export default ForgotPassword;
