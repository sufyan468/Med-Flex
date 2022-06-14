import React, { Fragment } from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel, Checkbox, Box } from '@mui/material';
import PropTypes from 'prop-types';

const GenericTableHead = (props) => {
    const {
        onSelectAllClick,
        headCells,
        order,
        orderBy,
        onRequestSort,
        numSelected,
        rowCount,
        surveyResponseRows,
        audienceRows,
    } = props;
    GenericTableHead.propTypes = {
        onRequestSort: PropTypes.func.isRequired,
        onSelectAllClick: PropTypes.func.isRequired,
        rowCount: PropTypes.number.isRequired,
        order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        orderBy: PropTypes.string.isRequired,
    };
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <Fragment>
            {surveyResponseRows || audienceRows ? (
                <TableHead sx={{ width: '100%' }}>
                    <TableRow>
                        {/* If you need to hide checkbox on specific table simply pass the props to genericTable disableTbHeadCheckBox={"none"}  */}

                        {headCells &&
                            headCells.map((headCell) => (
                                <TableCell
                                    key={headCell.id}
                                    sx={{ flex: headCell.flex, width: headCell.width }}
                                    padding={headCell.disablePadding ? 'none' : 'normal'}
                                >
                                    <TableSortLabel
                                        active={orderBy === headCell.id}
                                        direction={orderBy === headCell.id ? order : 'asc'}
                                        onClick={headCell.id !== 'addOffer' && createSortHandler(headCell.id)}
                                        className={headCell.id === 'addOffer' && 'hideSortIcons'}
                                    >
                                        {headCell.label}
                                        {orderBy === headCell.id ? (
                                            <Box>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
                                        ) : null}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                    </TableRow>
                </TableHead>
            ) : (
                <TableHead sx={{ width: '100%' }}>
                    <TableRow>
                        {/* If you need to hide checkbox on specific table simply pass the props to genericTable disableTbHeadCheckBox={"none"}  */}

                        <TableCell sx={{ width: '20px', display: props.disableTbHeadCheckBox }}>
                            <Checkbox
                                indeterminate={numSelected > 0 && numSelected < rowCount}
                                checked={rowCount > 0 && numSelected === rowCount}
                                onChange={onSelectAllClick}
                                color="primary"
                                inputProps={{
                                    'aria-label': 'select all Lists',
                                }}
                            />
                        </TableCell>

                        {headCells &&
                            headCells.map((headCell) => (
                                <TableCell
                                    key={headCell.id}
                                    sx={{ flex: headCell.flex, width: headCell.width }}
                                    padding={headCell.disablePadding ? 'none' : 'normal'}
                                >
                                    <TableSortLabel
                                        active={orderBy === headCell.id}
                                        direction={orderBy === headCell.id ? order : 'asc'}
                                        onClick={headCell.id !== 'addOffer' && createSortHandler(headCell.id)}
                                        className={headCell.id === 'addOffer' && 'hideSortIcons'}
                                    >
                                        {headCell.label}
                                        {orderBy === headCell.id ? (
                                            <Box>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
                                        ) : null}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                    </TableRow>
                </TableHead>
            )}
        </Fragment>
    );
};

export default GenericTableHead;
