import React from 'react';
import { Box, TableContainer, Table, Paper } from '@mui/material';
import GenericTableBody from './GenericTableBody';
import GenericTableHead from './GenericTableHead';

export default function GenericTable(props) {
    return (
        <Box sx={{ width: '100%', borderRadius: '0px' }}>
            <Paper sx={{ width: '100%', mb: 2, borderRadius: '0px' }}>
                <TableContainer>
                    <Table className="table-width" aria-labelledby="tableTitle">
                        {GenericTableHead(props)}
                        {GenericTableBody(props)}
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
