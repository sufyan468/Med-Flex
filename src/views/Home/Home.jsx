// import React, { Fragment, useEffect, useState } from 'react';
// import { Grid, Container, Typography, Box } from '@mui/material';
// import AppBanner from '../../components/General/LazyLoading/AppBanner';
// import { useDispatch, useSelector } from 'react-redux';
// import { getQuestion } from '../../store/slices/questions.slice';
// import GenericCard from '../../components/General/LazyLoading/GenericCard';
// import ProductCard from '../../components/General/LazyLoading/ProductCard';
// import GenericSearch from '../../components/General/GenericSearch';

// const Queue = (props) => {
//     // const dispatch = useDispatch();
//     // const PMData = useSelector((state) => state.questions.allQuestions.questionsData);
//     // console.log('🚀 ~ file: Home.jsx ~ line 11 ~ Queue ~ results', PMData);

//     // useEffect(() => {
//     //     dispatch(getQuestion());
//     // }, [dispatch]);

//     const prodArr = [
//         {
//             id: 1,
//             img: 'https://unicphscat.blob.core.windows.net/images-prd/s0002170.png',
//             title: 'Hospital Stretcher',
//             des: 'earphone i7 Single Wireless Bluetooth Hand Free Stereo Earphones White bluetooth ear phone for all cell phones use',
//         },
//         {
//             id: 1,
//             img: 'https://www.emssafetyservices.com/wp-content/uploads/2018/08/Philips-HeartStart-Onsite-AED_IMG_2821_web.jpg',
//             title: 'Defibrillator',
//             des: 'earphone i7 Single Wireless Bluetooth Hand Free Stereo Earphones White bluetooth ear phone for all cell phones use',
//         },
//         {
//             id: 1,
//             img: 'https://www.mindraynorthamerica.com/wp-content/uploads/2019/10/A5-with-N17-741x1024.jpg',
//             title: 'Anesthesia Machine',
//             des: 'earphone i7 Single Wireless Bluetooth Hand Free Stereo Earphones White bluetooth ear phone for all cell phones use',
//         },
//         {
//             id: 1,
//             img: 'https://haroonsurgical.pk/wp-content/uploads/2019/11/YK-8000C-500x554-1-3-3.png',
//             title: 'Patient Monitor',
//             des: 'earphone i7 Single Wireless Bluetooth Hand Free Stereo Earphones White bluetooth ear phone for all cell phones use',
//         },
//         {
//             id: 1,
//             img: 'https://agnthos.se/img/p/4/7/9/6/4796-large_default.jpg',
//             title: 'Sterilizers',
//             des: 'earphone i7 Single Wireless Bluetooth Hand Free Stereo Earphones White bluetooth ear phone for all cell phones use',
//         },
//         {
//             id: 1,
//             img: 'https://3.imimg.com/data3/JI/FG/MY-6958244/electrocardiograph-500x500.jpg',
//             title: 'EKG/ECG Machines',
//             des: 'earphone i7 Single Wireless Bluetooth Hand Free Stereo Earphones White bluetooth ear phone for all cell phones use',
//         },
//         {
//             id: 1,
//             img: 'https://www.medifa.com/wp-content/uploads/2020/09/medifa_7000_operating_table.jpg',
//             title: 'Surgical Tables',
//             des: 'earphone i7 Single Wireless Bluetooth Hand Free Stereo Earphones White bluetooth ear phone for all cell phones use',
//         },
//         {
//             id: 1,
//             img: 'https://img.trademed.com/products/8903/EC1730BL%20PT.jpg',
//             title: 'Blanket and Fluid Warmers',
//             des: 'earphone i7 Single Wireless Bluetooth Hand Free Stereo Earphones White bluetooth ear phone for all cell phones use',
//         },
//     ];
//     return (
//         <Fragment>
//             <Container>
//                 <Grid container spacing={4} sx={{ mt: 0, mb: 5, alignItems: 'start', py: 8 }}>
//                     <Grid item xs={12} md={3}>
//                         <Box sx={{ background: 'white', p: 2 }}>
//                             <Typography variant="h4" color="initial" style={{ marginBottom: '2rem' }}>
//                                 Search Here
//                             </Typography>

//                             <GenericSearch />
//                         </Box>
//                     </Grid>
//                     <Grid item xs={12} md={9}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} md={12}>
//                                 <Typography variant="h3">MedFlex Store</Typography>
//                             </Grid>
//                             {prodArr &&
//                                 prodArr.map((pData) => (
//                                     <Grid item xs={12} md={3} key={pData.id}>
//                                         <ProductCard prodImg={pData.img} prodTitle={pData.title} prodDes={pData.des} />
//                                     </Grid>
//                                 ))}
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Fragment>
//     );
// };

// export default Queue;

import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GenericTable from '../../components/General/GenericTable/GenericTable';
import { Container, Grid, Button, Box, TableCell, TableRow, TableBody, Checkbox } from '@mui/material';
import GenericTablePagination from '../../components/General/GenericTable/GenericTablePagination';
import Chip from '@mui/material/Chip';
import { getQuestion } from '../../store/slices/questions.slice';
import { useDispatch, useSelector } from 'react-redux';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const Home = (props) => {
    // const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Delete Icon State
    const [visibleDeleteIcon, setVisibleDeleteIcon] = useState(false);

    // Checkbox State
    const [checked, setChecked] = useState(false);

    // Redux State
    const dispatch = useDispatch();
    const { questionsData } = useSelector((state) => state.questions.allQuestions);
    console.log('Questions from API are ==>', questionsData);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        dispatch(getQuestion());
    }, []);

    useEffect(() => {
        setQuestions(questionsData);
    }, [questionsData]);

    const modalOpenHandler = () => {
        setIsModalOpen(true);
    };

    // Filter List add & del state
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const deleteIconHandler = () => {
        setVisibleDeleteIcon(!visibleDeleteIcon);
    };
    const modalHandler = () => {
        setIsModalOpen(!isModalOpen);
    };

    //Table Head array
    const toolHeadCells = [
        {
            id: 'id',
            numeric: true,
            disablePadding: false,
            label: '#',
            width: '10%',
            align: 'left',
        },
        {
            id: 'Tool Name',
            numeric: false,
            disablePadding: false,
            label: 'Equipment/Tool Name',
            flex: 1,
            align: 'left',
            width: '10%',
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
            label: 'Initial Cost AED',
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

    // function createData(id, question, questionType, responses, createdAt, createdBy) {
    //     return { id, question, questionType, responses, createdAt, createdBy };
    // }

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
        // createData('question1', 'Are you smoker?', 'Single Select', 121, 'Octtober 11, 2021', 'Codey Miles'),
        // createData(
        //     'question2',
        //     'Is a participant reqiured to be physically present at trial site?',
        //     'All that apply',
        //     131,
        //     'January 22, 2021',
        //     'John Doe',
        // ),
        // createData(
        //     'question3',
        //     'Any previous experimental treatment for COVID19?',
        //     'Agree/Disagree',
        //     141,
        //     'August 14, 2019',
        //     'James',
        // ),
        // createData(
        //     'question4',
        //     'Will participants be provided montary?',
        //     'Single Select',
        //     112,
        //     'December 25, 2000',
        //     'Sarah Raza',
        // ),
    ];

    // const rows = questionsData;

    const checkedHandler = (event) => {
        console.log('Checked/Unchecked?', event.target.checked);
        setChecked(event.target.checked);
    };

    return (
        <Fragment>
            <Container maxWidth="100%">
                {/* <PageTitle
                    search={<SearchBar placeholder="Search Question..." />}
                    titleButton={
                        <button
                            onClick={modalOpenHandler}
                            className="button-primary fullwidth"
                            sx={{ outline: 'none', border: 'none' }}
                            style={{ borderRadius: '2px', padding: '0rem 3rem' }}
                        >
                            Add Question
                        </button>
                    }
                /> */}

                <Grid item xs={12} sx={{ alignItems: 'center', height: '100vh' }}>
                    <GenericTable deleteIcon={deleteIconHandler} headCells={toolHeadCells} />
                    <TableBody sx={{ background: 'white' }}>
                        {rows &&
                            rows.map((row) => (
                                <TableRow key={row.id} sx={{ padding: '16px 16px' }}>
                                    <TableCell component="th" scope="row" align="left">
                                        <Checkbox
                                            type="checkbox"
                                            value={checked}
                                            onClick={checkedHandler}
                                            color="primary"
                                            inputProps={{
                                                'aria-label': 'select all Lists',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        // sortDirection={orderBy === props.headCell.id ? order : false}
                                        sx={{ align: 'left', width: '10%' }}
                                    >
                                        <Box className="flex-fill">{row.id}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.toolName}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.manufacturer}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.model}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.serialNumber}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.purchaseDate}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.lastCalibrationDate}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.location}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.initialCost}</Box>
                                    </TableCell>
                                    <TableCell sx={{ align: 'left', width: '10%' }}>
                                        <Box className="flex-fill">{row.costDepreciation}</Box>
                                    </TableCell>

                                    {/* <TableCell align="left" sx={{ width: '50%' }}>
                                        <Box sx={{}} className="flex-fill">
                                            {row.statement}
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left" sx={{ width: '20%' }}>
                                        <Box sx={{}} className="flex-fill">
                                            {row.type}
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left" sx={{ width: '30%' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{}} className="flex-fill">
                                                {row.responses}
                                            </Box>
                                            <Button variant="text" className="edit-button" sx={{ ml: 3 }}>
                                                <Link
                                                    to={`/questions/details/${row.id}`}
                                                    state={{ data: questionsData }}
                                                >
                                                    View
                                                </Link>
                                            </Button>
                                        </Box>
                                    </TableCell> */}
                                </TableRow>
                            ))}
                    </TableBody>
                    <GenericTablePagination />
                </Grid>
            </Container>
            {/* {isModalOpen ? (
                <ConfirmModal
                    isModalOpen={isModalOpen}
                    modalHandle={modalHandler}
                    headerTitle="Confirm Deletion"
                    bodyText="Are you sure you want to delete the select item(s)? This action cannot be undone."
                />
            ) : null} */}
        </Fragment>
    );
};

export default Home;
