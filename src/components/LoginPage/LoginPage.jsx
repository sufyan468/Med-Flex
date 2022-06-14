import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showSnackBar } from '../../store/slices/snackbar.slice';
import { signinUser, setIsDone, generateOTP } from '../../store/slices/user.slice';
import { Grid, Typography, Button, Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
// import LazyLoading from '../General/LazyLoading/LazyLoading';
import Footer from '../Footer/Footer';
import AppLogo from '../General/LazyLoading/AppLogo';

const defaultFormInput = {
    email: '',
    password: '',
    phone: '',
};

const LoginPage = (props) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [formInput, setFormInput] = useState(defaultFormInput);

    const { isApiDone, isOtpVerified, id } = useSelector((state) => state.user);

    const snackbarObject = {
        type: '',
        message: '',
        open: false,
    };

    useEffect(() => {
        localStorage.removeItem('token'); // clears the current token if user comes to signin page
    }, []);

    useEffect(() => {
        if (isOtpVerified === false && isApiDone === true) {
            dispatchSnackBar('success', 'Otp successfully Sent to your Register Mobile Number', true);
            dispatch(setIsDone({ isApiDone: false }));
            dispatch(generateOTP());
            navigate('/verify');
        } else {
            navigate('/login');
        }
    }, [id]);

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
        const signinDataObject = {
            email: formInput.email,
            password: formInput.password,
        };

        const emailFormat = '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/';
        if (signinDataObject.email === '' || signinDataObject.password === '') {
            dispatchSnackBar('error', 'Please fill in all the fields', true);
        } else if (signinDataObject.email === emailFormat) {
            dispatchSnackBar('error', 'Kindly Enter Valid Email Address', true);
        } else {
            dispatch(signinUser(signinDataObject));
        }
    };

    return (
        <Fragment>
            {isOtpVerified ? null : (
                <Fragment>
                    {/* <Suspense fallback={<LazyLoading />}> */}
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
                                        // onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                        // value={formInput.password}
                                        fullWidth
                                        // name="password"
                                        label="Password"
                                        // type="password"
                                        // id="password"
                                        // autoComplete="current-password"
                                        variant="standard"
                                    />
                                    <Box sx={{ mt: 4, textAlign: 'right' }}>
                                        <Button type="button" className="button-transparent">
                                            <Link
                                                style={{ textDecoration: 'none' }}
                                                color="white"
                                                to="/forgot-password"
                                            >
                                                Forgot Password
                                            </Link>
                                        </Button>
                                        <Button
                                            type="button"
                                            className="button-primary FllWidthBtn"
                                            variant="contained"
                                            onClick={(e) => handleLogin(e)}
                                            sx={{ float: 'right' }}
                                            style={{ padding: '0rem 3rem' }}
                                        >
                                            Sign In
                                        </Button>
                                    </Box>
                                    <Box sx={{ pt: 4 }}>
                                        <p>
                                            Don't have an account{' '}
                                            <span>
                                                <a href="/signup">Click here for Signup</a>
                                            </span>
                                        </p>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} className="rightSide" />
                    </Grid>
                    <Footer />
                    {/* </Suspense> */}
                </Fragment>
            )}
        </Fragment>
    );
};

export default LoginPage;
