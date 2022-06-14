import React, { Fragment } from 'react';
import { Container, Box, Typography, TextField } from '@mui/material';

const AppBanner = (props) => {
    return (
        <Fragment>
            <Container className="banner-image">
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h2" color="white">
                        {props.title}
                    </Typography>
                </Box>
                <Box sx={{ mb: 4 }}>
                    <p style={{ color: 'white', fontSize: '22px' }}>{props.paragraph}</p>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Box className="flex-fill w-100 ">
                        <TextField
                            fullWidth
                            name="Search"
                            label="search"
                            type="search"
                            id="search"
                            className="bg-white"
                            style={{ borderRadius: '5rem' }}
                            placeholder="Search Here ...."
                            autoComplete="current-password"
                        />
                    </Box>
                    <Box>
                        <button className="button-primary">Search</button>
                    </Box>
                </Box>
            </Container>
        </Fragment>
    );
};

export default AppBanner;
