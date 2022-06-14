import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
// import { APP_CONSTANTS } from '../../config/config';
import pNotFoundImg from '../../assets/images/pageNotFound.svg';

// const { PAGE_NOT_FOUND } = APP_CONSTANTS;

const NoPageFound = () => {
    return (
        <Container>
            <Grid
                container
                sx={{ height: '100vh' }}
                justifyContent="center"
                alignItems="center"
                className="no-page-found"
            >
                <Grid item xs={12} sm={6} md={5} lg={6}>
                    <Typography variant="h1" sx={{ color: '#00355b', fontSize: '8.9983rem', fontWeight: 'bold' }}>
                        404
                    </Typography>
                    <p style={{ fontSize: '1.25rem', color: '#677788' }}>Oops! Looks like you followed a bad link.</p>

                    <Box sx={{ mt: 5, mb: 4 }}>
                        <Link
                            to="/"
                            style={{ color: 'white', textDecoration: 'none', listStyle: 'none', padding: '1rem 3rem' }}
                            className="button-primary FllWidthBtn "
                        >
                            Back to Home
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={7} lg={6}>
                    <img
                        src={pNotFoundImg}
                        alt="Page Not Found"
                        title="Consuli | Page Not Found"
                        style={{ fill: '#0099ff' }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default NoPageFound;
