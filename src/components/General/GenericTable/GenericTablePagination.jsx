import React, { Fragment, useState } from 'react';
import { TablePagination, TableContainer } from '@mui/material';

const GenericTablePagination = () => {
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [page, setPage] = React.useState(0);
    // Pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <Fragment>
            <TableContainer className="bg-white">
                <TablePagination
                    style={{ width: '100%' }}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Fragment>
    );
};

export default GenericTablePagination;
