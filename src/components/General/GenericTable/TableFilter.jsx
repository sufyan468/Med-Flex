import React from 'react';
import { Container, Grid } from '@mui/material';

const TableFilter = (props) => {
    return (
        <Container
            className="bg-white"
            style={{ borderBottom: '0.5px solid #1A2733', padding: ' 0rem 0.8rem', alignItems: 'center' }}
        >
            <Grid container sx={{ py: 2, alignItems: 'center' }}>
                <Grid item xs={10} sm={10} md={11} lg={11}>
                    {props.leftIcon} {props.filterList}
                </Grid>
                <Grid item xs={2} sm={2} md={1} lg={1} sx={{ textAlign: 'right' }}>
                    {props.rightIcon}
                </Grid>
            </Grid>
        </Container>
    );
};

export default TableFilter;
