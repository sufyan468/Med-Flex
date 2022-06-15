import React, { Fragment } from 'react';
import { TableBody } from '@mui/material';

const GenericTableBody = (props) => {
    return (
        <Fragment>
            <TableBody>{props.BodyCells}</TableBody>
        </Fragment>
    );
};

export default GenericTableBody;
