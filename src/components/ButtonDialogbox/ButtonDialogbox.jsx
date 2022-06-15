import * as React from 'react';
import Button from '@mui/material/Button';
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
                <DialogTitle sx={{ color: '#032541' }}>What action do you want to perform?</DialogTitle>
                <DialogContent></DialogContent>
                <DialogActions>
                    <Button onClick={props.dialogCloseHandler} sx={{ textTransform: 'none', color: '#032541' }}>
                        Return Tool
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ textTransform: 'none', color: 'white', backgroundColor: '#032541' }}
                        onClick={handleClickOpen}
                    >
                        Take Out
                    </Button>
                </DialogActions>
            </Dialog>

            {open ? (
                <ToolDialogbox
                    open={open}
                    toolName={props.toolName}
                    dialogOpenHandler={handleClickOpen}
                    dialogCloseHandler={handleClose}
                />
            ) : null}
        </div>
    );
};

export default ButtonDialogbox;
