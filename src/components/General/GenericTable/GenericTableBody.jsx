import React, { Fragment } from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';

const GenericTableBody = (props) => {
    // const { bodyCells, surveyResponseRows, audienceRows } = props;

    return (
        <Fragment>
            <TableBody>
                {/* {surveyResponseRows
                    ? surveyResponseRows.map(() => (
                          <TableRow hover role="checkbox" style={{ width: '100%' }}>
                              {bodyCells &&
                                  bodyCells.map((bodyCell, index) => (
                                      <TableCell
                                          key={bodyCell.name}
                                          align={bodyCell.align}
                                          padding={bodyCell.disablePadding ? 'none' : 'normal'}
                                          sx={{ flex: bodyCell.flex }}
                                      >
                                          {bodyCell.label(bodyCell.name, index)}
                                      </TableCell>
                                  ))}
                          </TableRow>
                      ))
                    : audienceRows
                    ? audienceRows.map(() => (
                          <TableRow hover role="checkbox" style={{ width: '100%' }}>
                              {bodyCells &&
                                  bodyCells.map((bodyCell, index) => (
                                      <TableCell
                                          key={bodyCell.name}
                                          align={bodyCell.align}
                                          padding={bodyCell.disablePadding ? 'none' : 'normal'}
                                          sx={{ flex: bodyCell.flex }}
                                      >
                                          {bodyCell.label(bodyCell.name, index)}
                                      </TableCell>
                                  ))}
                          </TableRow>
                      ))
                    : null} */}
            </TableBody>
        </Fragment>
    );
};

export default GenericTableBody;
