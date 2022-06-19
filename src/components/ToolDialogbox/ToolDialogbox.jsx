import React, { useRef, useState, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SignaturePad from 'react-signature-canvas';
import { getAllocatedTools } from '../../store/slices/user.tool.slice';
import { useSelector, useDispatch } from 'react-redux';

const ToolDialogbox = (props) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.tools);
    console.log('data in dialog box =>', data);
    const [allocatedTools, setAllocatedTools] = useState([]);
    let sigPad = useRef({});
    const sigPadImg = useRef({});
    const [imageURL, setImageURL] = useState('');
    const { toolName, dialogCloseHandler, handleClose, open } = props;
    // const save = () => {
    //     sigPad.current.save();
    // };
    const clear = () => {
        sigPad.current.clear();
    };

    const trim = () => {
        // console.log(sigPad.current.getTrimmedCanvas().toDataURL('image/png'));

        setImageURL(sigPad.current.getTrimmedCanvas().toDataURL('image/png'));
    };

    // useEffect(() => {
    //     dispatch(getAllocatedTools);
    // }, []);

    useEffect(() => {
        dispatch(getAllocatedTools());
    }, []);
    useEffect(() => {
        setAllocatedTools(data);
    }, [data]);

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
                        <SignaturePad penColor="white" canvasProps={{ className: 'sigCanvas' }} ref={sigPad} />
                    </Box>
                    {/* <Box sx={{ textAlign: 'right', height: '300px' }}>
                        {imageURL ? <img ref={sigPad} src={imageURL} /> : null}
                    </Box> */}
                    {imageURL ? (
                        <>
                            <Typography variant="h3">Your signature are below:</Typography>
                            <Box sx={{ textAlign: 'right', height: '10%', background: 'orange' }}>
                                <img ref={sigPad} src={imageURL} />
                            </Box>
                        </>
                    ) : null}
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
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
                        onClick={trim}
                    >
                        Trim
                    </Button>

                    <Button
                        sx={{ textTransform: 'none', color: 'white', background: '#032541' }}
                        onClick={dialogCloseHandler}
                    >
                        Cancel
                    </Button>
                    <Button
                        sx={{ textTransform: 'none', color: 'white', background: '#032541' }}
                        // onClick={dialogCloseHandler}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ToolDialogbox;
