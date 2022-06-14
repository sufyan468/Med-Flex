import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { showSnackBar } from '../../store/slices/snackbar.slice';
import { useDispatch, useSelector } from 'react-redux';
import { setOTPSent, verifyOtp, generateOTP } from '../../store/slices/user.slice';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import AppLogo from '../../components/General/LazyLoading/AppLogo';

const useStyles = makeStyles({
    root: {
        color: '#1A2733',
        fontFamily: 'Lato',
        fontSize: '14px',
        letterSpacing: 0,
        lineHeight: '18px',
    },
});
const defaultInput = {
    otp: '',
    rememberMe: false,
};

const VerifyPin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // OTP Input State
    const [otpInput, setOtpInput] = useState(defaultInput);
    const { isOtpVerified, user } = useSelector((state) => state.user);
    console.log('🚀 ~ file: VerifyPin.jsx ~ line 38 ~ VerifyPin ~ user', user);
    const { mobile } = useSelector((state) => state.user.user.userData);
    console.log('mobile number ==>', mobile);
    const digitsToShow = 2;
    const lastPhoneDigits = mobile.substring(mobile.length - digitsToShow);
    console.log(lastPhoneDigits);

    // SnackBar Object
    const snackbarObj = {
        type: '',
        message: '',
        open: false,
    };

    //
    useEffect(() => {
        if (isOtpVerified === true) {
            dispatchSnackBar('success', 'Login Success', true);
            dispatch(setOTPSent({ otpSent: false }));
            navigate('/home');
        } else {
            navigate('/verify');
        }
    }, [isOtpVerified]);

    const handleOTPLogin = (e) => {
        e.stopPropagation();
        const signinOtpObject = {
            otp: otpInput.name,
        };

        if (!signinOtpObject.otp || signinOtpObject.otp === '' || signinOtpObject.otp.length <= 5) {
            debugger;
            dispatchSnackBar('error', 'Please Enter the OTP that you received', true);
        } else {
            dispatch(verifyOtp(signinOtpObject));
        }
    };

    // SnackBar
    const dispatchSnackBar = (type, message, open) => {
        snackbarObj.type = type;
        snackbarObj.message = message;
        snackbarObj.open = open;

        dispatch(showSnackBar(snackbarObj));
    };

    // Hnadle the input
    const handleFrom = (value, name) => {
        setOtpInput({
            ...otpInput,
            name: value,
        });
    };

    // Request another OTP
    const handleRequestAnotherOtp = (e) => {
        dispatch(generateOTP());
        dispatchSnackBar('success', 'New OTP Generated successfully', true);
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

                        <Typography component="h5" variant="h5" sx={{ mt: 5, mb: 3 }}>
                            Enter the code we sent to the phone number ending in **{lastPhoneDigits}
                        </Typography>

                        <p sx={{ pb: 4 }}>We're asking for this code due to two-factor authentication.</p>
                        <Box component="form" noValidate sx={{ mt: 4 }}>
                            <TextField
                                fullWidth
                                type="text"
                                label="Enter Code"
                                id="otp"
                                autoComplete="current-otp"
                                onChange={(e) => handleFrom(e.target.value, e.target.name)}
                                value={otpInput.text}
                            />
                            <Box>
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox size="medium" sx={{ marginRight: '0.5rem' }} />}
                                    sx={{ m: '1rem 0rem' }}
                                    label="Don't ask me again on this computer"
                                    labelPlacement="end"
                                    className={classes.root}
                                />
                            </Box>
                            <Box sx={{ mt: 4, textAlign: 'right' }}>
                                <Button
                                    type="button"
                                    className="button-transparent"
                                    onClick={(e) => handleRequestAnotherOtp(e)}
                                >
                                    Request Another Code
                                </Button>
                                <Button
                                    type="button"
                                    className="button-primary FllWidthBtn"
                                    variant="contained"
                                    sx={{ float: 'right' }}
                                    onClick={(e) => handleOTPLogin(e)}
                                    style={{ padding: '0rem 4rem' }}
                                >
                                    Login
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

export default VerifyPin;
