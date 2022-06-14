import React, { Fragment, useState } from 'react';
import { Grid, Typography, Box, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppLogo from '../../components/General/LazyLoading/AppLogo';

const defaultFormInput = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
};

const Signup = () => {
    const [formInput, setFormInput] = useState(defaultFormInput);

    const handleInputChange = (name, value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    // const handleLogin = (e) => {
    //     e.stopPropagation();
    //     const signinDataObject = {
    //         email: formInput.email,
    //         password: formInput.password,
    //     };

    return (
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
                            Sign up
                        </Typography>
                        <p style={{ margin: '1rem 0rem' }}>Create new account to MedFlex:</p>
                        <Box component="form" noValidate sx={{ mt: 4 }}>
                            <TextField
                                sx={{ mb: 2 }}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                value={formInput.firstName}
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
                                value={formInput.lastName}
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
                                value={formInput.userName}
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
                                    // onClick={(e) => handleLogin(e)}
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

            {/* </Suspense> */}
        </Fragment>
    );
};

export default Signup;
