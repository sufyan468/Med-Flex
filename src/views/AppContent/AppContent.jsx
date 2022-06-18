import React, { useEffect, Fragment } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AppBarComponent } from '../../components';
import Footer from '../../components/Footer/Footer';
import CustomizedSnackbars from '../../views/Snackbar/CustomSnackbar';
import { setLoginUser } from '../../store/slices/user.slice';
import { useSelector } from 'react-redux';

const AppContent = ({ routes }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isUserLogin } = useSelector((state) => state.user);

    useEffect(() => {
        location.pathname === '/' && navigate('/login');
        location.pathname === '' && navigate('/login');
        if (isUserLogin === true) {
            navigate('/home');
        } else {
            location.pathname === '/signup' && navigate('/signup');
            // navigate('/login');
        }
    }, [isUserLogin]);

    return (
        <Fragment>
            {location.pathname !== '/login' &&
            location.pathname !== '/signup' &&
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
