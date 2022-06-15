import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Box, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { logOutUser } from '../../store/slices/user.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showSnackBar } from '../../store/slices/snackbar.slice';

export default function PrimarySearchAppBar({ children, to, ...props }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const snackbarObject = {
        type: '',
        message: '',
        open: false,
    };

    const logout = () => {
        console.log('logout');
        dispatch(logOutUser({ userLogOut: true }));
        localStorage.clear();
        navigate('/login');
        dispatchSnackBar('success', 'Logout Successfully', true);
    };

    const dispatchSnackBar = (type, message, open) => {
        snackbarObject.type = type;
        snackbarObject.message = message;
        snackbarObject.open = open;
        dispatch(showSnackBar(snackbarObject));
    };

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile Mobile-menu';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            className="menu-box"
        >
            <li className="nav-link mobile-menu-width">
                <NavLink to="/home">Home</NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/members">Products</NavLink>
            </li>

            <li className="nav-link">
                <Button
                    onClick={logout}
                    style={{
                        outline: 'none',
                        background: 'transparent',
                        border: 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                >
                    LogOut
                </Button>
            </li>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1, background: '#032541' }}>
            <AppBar position="static" sx={{ boxShadow: 'none', background: '#032541' }}>
                <Container maxwidth="sm">
                    <Toolbar className="nvabar">
                        <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'block', sm: 'block' } }}>
                            <NavLink to="/">
                                <img
                                    src="http://www.medflex.ae/images/logosmall3.png"
                                    alt="MedFlex Logo"
                                    style={{ height: '59px', width: '96px' }}
                                />
                            </NavLink>
                        </Typography>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box
                            sx={{ display: { xs: 'none', md: 'flex' } }}
                            style={{ height: '76px', alignItems: 'center' }}
                            className="menu-box"
                        >
                            <li className="nav-link">
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to="/products">Products</NavLink>
                            </li>

                            <li className="nav-link">
                                <Button
                                    onClick={logout}
                                    style={{
                                        outline: 'none',
                                        background: 'transparent',
                                        border: 'none',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                    }}
                                >
                                    LogOut
                                </Button>
                            </li>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                sx={{ color: 'info' }}
                            >
                                <MenuIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}
