import React, { useRef } from 'react';
import { Button, Box, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SignatureCanvas from 'react-signature-canvas';

const ToolDialogbox = (props) => {
    let sigPad = useRef({});
    const { toolName, dialogCloseHandler, handleClose, open } = props;
    // const save = () => {
    //     sigPad.current.save();
    // };
    const clear = () => {
        sigPad.current.clear();
    };

    return (
        <div>
            <Dialog sx={{ heigh: '100vh' }} open={open} onClose={handleClose}>
                <DialogTitle sx={{ color: '#032541', borderBottom: '1px solid #D8D8D8' }}>{toolName}</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ marginTop: '1rem' }}>
                        The tool/equipment with serial number
                        <span style={{ color: '#032541' }}> {props.serialNumber} </span>
                        has been taken in good working conditions. If not, I will notify management with photos before
                        taking them. By signing below, I agree to be liable for each tool in case the tools were lost or
                        damaged
                    </DialogContentText>
                    <Box>
                        <Typography variant="h3" sx={{ mt: '1rem', color: '#032541' }}>
                            Signature Box
                        </Typography>
                        <SignatureCanvas penColor="#032541" canvasProps={{ className: 'sigCanvas' }} ref={sigPad} />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button
                        sx={{
                            textTransform: 'none',
                            color: 'white',
                            background: '#032541',
                            '&:hover': {
                                color: '#032541',
                                background: '#032541',
                            },
                        }}
                        onClick={clear}
                    >
                        Clear
                    </Button>
                    <Button
                        sx={{ textTransform: 'none', color: 'white', background: '#032541' }}
                        onClick={dialogCloseHandler}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ToolDialogbox;
