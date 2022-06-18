import React, { useRef } from 'react';
import { Button, Box } from '@mui/material';
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
                <DialogTitle sx={{ color: '#032541' }}>{toolName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        The taken tools/equipment has been taken in good working conditions. If not, I will notify
                        management with photos before taking them. By signing below, I agree to be liable for each tool
                        in case the tools were lost or damaged
                    </DialogContentText>
                    <Box>
                        <SignatureCanvas
                            penColor="red"
                            canvasProps={{ width: 300, height: 200, className: 'sigCanvas' }}
                            ref={sigPad}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button onClick={clear}>Clear</Button>
                            {/* <Button onClick={save}>Save</Button> */}
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button sx={{ textTransform: 'none', color: '#032541' }} onClick={dialogCloseHandler}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ToolDialogbox;
