import * as React from 'react';
import { Button, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ToolDialogbox from '../ToolDialogbox/ToolDialogbox';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ButtonDialogbox = (props) => {
    console.log('Props in Button Modal ==>', props);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.dialogCloseHandler}
                aria-describedby="alert-dialog-slide-description"
            >
                <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: '1px solid #D8D8D8' }}>
                    <Box className="flex-fill">Action Box</Box>
                    <Box sx={{ cursor: 'pointer' }} onClick={props.dialogCloseHandler}>
                        X
                    </Box>
                </Box>
                <DialogTitle sx={{ color: '#032541' }} className="Dialog-chappy">
                    Do you want to take equipment out?
                </DialogTitle>
                <DialogContent></DialogContent>
                <DialogActions>
                    {/* <Button onClick={props.dialogCloseHandler} sx={{ textTransform: 'none', color: '#032541' }}>
                        Return Tool
                    </Button> */}
                    <Button
                        variant="contained"
                        sx={{ textTransform: 'none', color: 'white', backgroundColor: '#032541' }}
                        onClick={handleClickOpen}
                    >
                        {props.btnText}
                    </Button>
                </DialogActions>
            </Dialog>

            {open ? (
                <ToolDialogbox
                    open={open}
                    toolName={props.toolName}
                    serialNumber={props.serialNumber}
                    dialogOpenHandler={handleClickOpen}
                    dialogCloseHandler={handleClose}
                />
            ) : null}
        </div>
    );
};

export default ButtonDialogbox;
