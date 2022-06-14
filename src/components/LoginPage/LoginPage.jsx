import React, { Fragment } from 'react';
import { Grid, Typography, Button, Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
// import LazyLoading from '../General/LazyLoading/LazyLoading';
import Footer from '../Footer/Footer';
import AppLogo from '../General/LazyLoading/AppLogo';

const LoginPage = (props) => {
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
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    id="email"
                                    name="password"
                                    autoComplete="password"
                                    variant="standard"
                                />
                                <Box sx={{ mt: 4, textAlign: 'right' }}>
                                    <Button type="button" className="button-transparent">
                                        <Link style={{ textDecoration: 'none' }} color="white" to="/forgot-password">
                                            Forgot Password
                                        </Link>
                                    </Button>
                                    <Button
                                        type="button"
                                        className="button-primary FllWidthBtn"
                                        variant="contained"
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
            </Fragment>
        </Fragment>
    );
};

export default LoginPage;
