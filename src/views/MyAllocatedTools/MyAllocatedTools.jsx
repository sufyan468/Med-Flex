import React, { Fragment, useEffect } from 'react';
import GenericTable from '../../components/General/GenericTable/GenericTable';
import { Container, Grid, Box, TableCell, TableRow, Button } from '@mui/material';
import ButtonDialogbox from '../../components/ButtonDialogbox/ButtonDialogbox';
import HeaderNavigration from '../../components/General/HeaderNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTools } from '../../store/slices/user.tool.slice';

const MyAllocatedTools = () => {
    const [allocatedTools, setAllocatedTools] = React.useState([]);

    const dispatch = useDispatch();
    const data = useSelector((state) => state.tools.allocatedTools.toolsListData);
    console.log('data in Home component =>', data);
    const [buttonDialogOpen, setButtonDialogOpen] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState('');

    const handleButtonDialogOpen = (e, index) => {
        e.preventDefault();
        setButtonDialogOpen(true);
        setSelectedRow(index);
    };

    const handleButtonDialogClose = () => {
        setButtonDialogOpen(false);
    };

    useEffect(() => {
        dispatch(getTools(data));
    }, []);

    useEffect(() => {
        setAllocatedTools(data);
    }, [data]);

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

    function createData(
        id,
        toolName,
        manufacturer,
        model,
        serialNumber,
        purchaseDate,
        lastCalibrationDate,
        location,
        initialCost,
        costDepreciation,
    ) {
        return {
            id,
            toolName,
            manufacturer,
            model,
            serialNumber,
            purchaseDate,
            lastCalibrationDate,
            location,
            initialCost,
            costDepreciation,
        };
    }

    const rows = [
        createData(
            '1',
            'Hospital Stretcher',
            'John Doe',
            '892134',
            'JFK-11232',
            '31-9-2021',
            '17-2-2022',
            'UAE',
            '1000AED',
            '10%',
        ),
        createData(
            '2',
            'Defibrillator',
            'Johnson Gill',
            '267437',
            'DEF-12667',
            '01-1-2019',
            '12-2-2019',
            'Oman',
            '1500AED',
            '17%',
        ),
        createData(
            '3',
            'Anesthesia Machine',
            'Abraham',
            '334098',
            'GCV-12324',
            '16-09-2020',
            '12-01-2021',
            'Oman',
            '1500AED',
            '17%',
        ),
        createData(
            '4',
            'Patient Monitor',
            'Abner',
            '234543',
            'ABX-11309',
            '01-06-2016',
            '19-06-2020',
            'Oman',
            '1500AED',
            '17%',
        ),
        createData(
            '5',
            'Sterilizers',
            'Aamanda',
            '234432',
            'SBF-11067',
            '28-02-2011',
            '12-09-2022',
            'Oman',
            '1500AED',
            '17%',
        ),
        createData(
            '6',
            'Defibrillator',
            'Aamiya',
            '098887',
            'XCB-00909',
            '01-01-2010',
            '12-09-2021',
            'Oman',
            '1500AED',
            '17%',
        ),
        createData(
            '7',
            'EKG/ECG Machines',
            'Bravo Cena',
            '321221',
            'NMY-64564',
            '01-07-2005',
            '12-03-2022',
            'Oman',
            '1500AED',
            '17%',
        ),
        createData(
            '8',
            'Surgical Tables',
            'Xavier',
            '323323',
            'POL-45671',
            '01-1-2020',
            '12-2-2021',
            'Oman',
            '1500AED',
            '17%',
        ),
    ];

    return (
        <Fragment>
            <Container>
                <HeaderNavigration pageTitle="Dashboard" />
                <Grid item xs={12} sx={{ alignItems: 'center', mt: 7 }}>
                    <GenericTable
                        headCells={toolHeadCells}
                        disableTbHeadCheckBox="none"
                        BodyCells={
                            data &&
                            data.map((row, index) => (
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
                            btnText="Return"
                            toolName={rows[selectedRow].toolName}
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

export default MyAllocatedTools;
