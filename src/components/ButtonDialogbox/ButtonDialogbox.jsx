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
    console.log('Props ==>', props);
    const [open, setOpen] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState('');

    // const [open, setOpen] = React.useState(false);

    // const handleClose = () => {
    //     setOpen(false);
    // };

    const handleClickOpen = (e, index) => {
        e.preventDefault();
        setOpen(true);
        setSelectedRow(index);
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
                <DialogContent>
                    {/* <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous location data to Google,
                        even when no apps are running.
                    </DialogContentText> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.dialogCloseHandler} sx={{ textTransform: 'none', color: '#032541' }}>
                        Return Tool
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ textTransform: 'none', color: 'white', backgroundColor: '#032541' }}
                        // onClick={props.dialogCloseHandler}
                        onClick={(e) => handleClickOpen(e, props.index)}
                    >
                        Take Out
                    </Button>

                    {/* <Button onClick={props.dialogCloseHandler}>Disagree</Button>
                    <Button onClick={props.dialogCloseHandler}>Agree</Button> */}
                </DialogActions>
            </Dialog>

            {open ? (
                <ToolDialogbox
                    // toolName={props.rows[selectedRow].toolName}
                    // cost={props.rows[selectedRow].initialCost}
                    open={open}
                    dialogOpenHandler={handleClickOpen}
                    dialogCloseHandler={handleClose}
                />
            ) : null}
        </div>
    );
};

export default ButtonDialogbox;
