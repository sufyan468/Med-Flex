import React, { useState } from 'react';
// import AddOfferModal from '../AddOfferModal';
import { Box, TableContainer, Table, Paper } from '@mui/material';
import GenericTableBody from './GenericTableBody';
import GenericTableHead from './GenericTableHead';

export default function GenericTable(props) {
    // console.log('Props ==>', props);
    // Modal Open Close State
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const modalOpenHandler = () => {
    //     setIsModalOpen(true);
    // };

    // const modalCloseHandler = () => {
    //     setIsModalOpen(false);
    // };

    return (
        <Box sx={{ width: '100%', borderRadius: '0px' }}>
            <Paper sx={{ width: '100%', mb: 2, borderRadius: '0px' }}>
                <TableContainer>
                    <Table className="table-width" aria-labelledby="tableTitle">
                        {GenericTableHead(props)}
                        {GenericTableBody(props)}
                    </Table>
                </TableContainer>

                {/* {isModalOpen ? (
                    <AddOfferModal onOpen={modalOpenHandler} onClose={modalCloseHandler} isModalOpen={isModalOpen} />
                ) : null} */}
            </Paper>
        </Box>
    );
}
