import React, { Fragment, useEffect } from 'react';
import GenericTable from '../../components/General/GenericTable/GenericTable';
import { Container, Grid, Box, TableCell, TableRow, Button } from '@mui/material';
import ButtonDialogbox from '../../components/ButtonDialogbox/ButtonDialogbox';
import HeaderNavigration from '../../components/General/HeaderNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToolsList } from '../../store/slices/user.tool.slice';

const Home = () => {
    const dispatch = useDispatch();
    const { toolsListData } = useSelector((state) => state.tools.toolsList);
    // console.log('data in Home component =>', toolsListData);
    const [tools, setTools] = React.useState([]);
    const [buttonDialogOpen, setButtonDialogOpen] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState('');

    const handleButtonDialogOpen = (e, index) => {
        console.log('index =>', index);
        e.preventDefault();
        setButtonDialogOpen(true);
        setSelectedRow(index);
    };

    const handleButtonDialogClose = () => {
        setButtonDialogOpen(false);
    };

    useEffect(() => {
        dispatch(getToolsList());
    }, []);
    useEffect(() => {
        setTools(toolsListData);
    }, [toolsListData]);

    const toolHeadCells = [
        {
            id: 'id',
            numeric: true,
            disablePadding: false,
            label: '#',
            width: '2%',
            align: 'left',
        },
        {
            id: 'Tool Name',
            numeric: false,
            disablePadding: false,
            label: 'Equipment Name',
            flex: 1,
            align: 'left',
            width: '18%',
        },
        {
            id: 'Manufacturer',
            numeric: false,
            disablePadding: false,
            label: 'Manufacturer',
            flex: 1,
            align: 'left',
            width: '10%',
        },
        {
            id: 'Model',
            numeric: false,
            disablePadding: false,
            label: 'Model',
            flex: 1,
            align: 'left',
            width: '10%',
        },
        {
            id: 'Serial Number',
            numeric: false,
            disablePadding: false,
            label: 'Serial Number',
            flex: 1,
            align: 'left',
            width: '10%',
        },
        {
            id: 'Purchase Date',
            numeric: false,
            disablePadding: false,
            label: 'Purchase Date',
            flex: 1,
            align: 'left',
            width: '10%',
        },
        {
            id: 'Last Calibration Date',
            numeric: false,
            disablePadding: false,
            label: 'Last Calibration Date',
            flex: 1,
            align: 'left',
            width: '10%',
        },
        {
            id: 'Location',
            numeric: false,
            disablePadding: false,
            label: 'Location',
            flex: 1,
            align: 'left',
            width: '10%',
        },
        {
            id: 'Initial Cost AED',
            numeric: false,
            disablePadding: false,
            label: 'Initial Cost-AED',
            flex: 1,
            align: 'left',
            width: '10%',
        },
        {
            id: 'Cost Depreciation',
            numeric: false,
            disablePadding: false,
            label: 'Cost Depreciation % per year',
            flex: 1,
            align: 'left',
            width: '10%',
        },
    ];

    return (
        <Fragment>
            <Container>
                <HeaderNavigration pageTitle="Tools" />
                <Grid item xs={12} style={{ alignItems: 'center', marginBottom: '5rem', marginTop: '3rem' }}>
                    <GenericTable
                        headCells={toolHeadCells}
                        disableTbHeadCheckBox="none"
                        BodyCells={
                            toolsListData &&
                            toolsListData.map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ padding: '16px 16px', cursor: 'pointer' }}
                                    onClick={(e) => handleButtonDialogOpen(e, index)}
                                >
                                    <TableCell sx={{ align: 'left', width: '2%' }}>
                                        <Box className="flex-fill">{row.id}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '18%' }}>
                                        <Box className="flex-fill">{row.name}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.manufacturer}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.model}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.serial_number}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.date_of_purchase}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.next_calibration_due_date}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.initial_location}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.cost}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.cost_depreciation_percentage_per_year}</Box>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    />
                    {buttonDialogOpen ? (
                        <ButtonDialogbox
                            btnText="Yes"
                            tool_id={toolsListData[selectedRow].id}
                            location_of_work={toolsListData[selectedRow].initial_location}
                            return_date={toolsListData[selectedRow].next_calibration_due_date}
                            toolName={toolsListData[selectedRow].name}
                            serialNumber={toolsListData[selectedRow].serial_number}
                            open={buttonDialogOpen}
                            dialogOpenHandler={handleButtonDialogOpen}
                            dialogCloseHandler={handleButtonDialogClose}
                        />
                    ) : null}
                </Grid>
            </Container>
        </Fragment>
    );
};

export default Home;
