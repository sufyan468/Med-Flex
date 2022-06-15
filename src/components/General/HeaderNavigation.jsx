import React, { Fragment } from 'react';
import { Container, Grid, Typography } from '@mui/material';

const HeaderNavigation = (props) => {
    return (
        <Fragment>
            <Grid container sx={{ my: 5, alignItems: 'center' }}>
                <Grid item xs={6} md={6}>
                    <Typography variant="h3" color="#032541">
                        {props.pageTitle}
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6} sx={{ textAlign: 'right' }}>
                    {props.pageBtn}
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default HeaderNavigation;
