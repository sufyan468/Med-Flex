import React, { useEffect, Fragment } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { AppBarComponent } from '../../components';
import Footer from '../../components/Footer/Footer';
import CustomizedSnackbars from '../../views/Snackbar/CustomSnackbar';

const AppContent = ({ routes }) => {
    const navigate = useNavigate();
    const location = useLocation();
    // const { isOtpVerified } = useSelector((state) => state.user);

    useEffect(() => {
        location.pathname === '/' && navigate('/login');
        location.pathname === '' && navigate('/login');

        /* ------------------

            Check  User Login OR Not Login & Redirect to Login page.
            Uncomment the Line Numbers 11 , 23 to 25
           ------------------  */

        // if (isOtpVerified === false) {
        //     navigate('/login');
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            {location.pathname !== '/login' &&
            location.pathname !== '/signup' &&
            location.pathname !== '/verify' &&
            location.pathname !== '/forgot-password' &&
            location.pathname !== '/set-password' &&
            location.pathname !== undefined &&
            location.pathname !== '/' ? (
                <AppBarComponent />
            ) : null}
            <CustomizedSnackbars />
            <Routes>
                {routes.map((route) => (
                    <Route key={route.id} path={route.path} element={<route.component />} />
                ))}
            </Routes>
            {location.pathname !== '/login' && <Footer />}
        </Fragment>
    );
};

export default AppContent;
