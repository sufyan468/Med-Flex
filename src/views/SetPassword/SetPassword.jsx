import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch } from 'react-redux';
import { showSnackBar } from '../../store/slices/snackbar.slice';
import { passwordReset } from '../../store/slices/user.slice';
import { useNavigate } from 'react-router-dom';
import AppLogo from '../../components/General/LazyLoading/AppLogo';

const defaultFormInput = {
    newPsw: '',
    confirmNewPsw: '',
};

const SetPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let [searchParams, setSearchParams] = useSearchParams();
    console.log('🚀 ~ file: SetPassword.jsx ~ line 24 ~ SetPassword ~ setSearchParams', setSearchParams);

    const userToken = searchParams.get('token');

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

    // SnackBar
    const dispatchSnackBar = (type, message, open) => {
        snackbarObject.type = type;
        snackbarObject.message = message;
        snackbarObject.open = open;

        dispatch(showSnackBar(snackbarObject));
    };

    const handleResetPsw = (e) => {
        e.stopPropagation();
        const resetPswDataObject = {
            newPsw: formInput.newPsw,
            confirmNewPsw: formInput.confirmNewPsw,
        };

        if (resetPswDataObject.newPsw !== resetPswDataObject.confirmNewPsw) {
            dispatchSnackBar('error', 'Password does Not match', true);
        } else if (resetPswDataObject.newPsw.length <= 8 && resetPswDataObject.confirmNewPsw.length <= 8) {
            dispatchSnackBar('error', 'Password must be 8 character long', true);
        } else {
            dispatch(passwordReset({ password: resetPswDataObject.newPsw, userToken }));
            dispatchSnackBar('success', 'Password reset successfully', true);
            navigate('/login');
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
                            Set Password
                        </Typography>

                        <Box component="form" noValidate sx={{ mt: 4 }}>
                            <TextField
                                sx={{ mb: 2 }}
                                fullWidth
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                value={formInput.newPsw}
                                type="password"
                                id="newPsw"
                                label="Your New Password"
                                name="newPsw"
                                autoComplete="password"
                            />
                            <TextField
                                fullWidth
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                value={formInput.confirmNewPsw}
                                name="confirmNewPsw"
                                label="Confirm New Password"
                                type="password"
                                id="confirmNewPsw"
                                autoComplete="Confirm-password"
                            />
                            <Box sx={{ mt: 4, textAlign: 'right' }}>
                                <Button type="submit" className="button-transparent">
                                    <Link style={{ textDecoration: 'none' }} color="white" to="/login">
                                        Login Instead
                                    </Link>
                                </Button>

                                <Button
                                    type="button"
                                    className="button-primary FllWidthBtn"
                                    variant="contained"
                                    onClick={(e) => handleResetPsw(e)}
                                    sx={{ float: 'right' }}
                                    style={{ padding: '0rem 3rem' }}
                                >
                                    Set Password
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

export default SetPassword;
