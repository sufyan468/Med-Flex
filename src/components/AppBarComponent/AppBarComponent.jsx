import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

export default function PrimarySearchAppBar({ children, to, ...props }) {
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
                <NavLink to="/questions">LogOut</NavLink>
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
                                <img src="http://www.medflex.ae/images/logosmall3.png" alt="MedFlex Logo" />
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
                                <NavLink to="/offers">Logout</NavLink>
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
