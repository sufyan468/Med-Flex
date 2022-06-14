import React, { Fragment } from 'react';
import { Box } from '@mui/material';

const LazyLoading = () => {
    return (
        <Fragment>
            <Box class="loading-dots">
                <Box sx={{ mr: 3 }}>Loading</Box>
                <Box class="loading-dots--dot"></Box>
                <Box class="loading-dots--dot"></Box>
                <Box class="loading-dots--dot"></Box>
                <Box class="loading-dots--dot"></Box>
                <Box class="loading-dots--dot"></Box>
            </Box>
        </Fragment>
    );
};

export default LazyLoading;
