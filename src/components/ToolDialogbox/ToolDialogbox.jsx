import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ToolDialogbox = (props) => {
    const { toolName, dialogCloseHandler, handleClose, open, cost } = props;
    // console.log('Cost =<', cost);

    return (
        <div>
            <Dialog sx={{ heigh: '100vh' }} open={open} onClose={handleClose}>
                <DialogTitle sx={{ color: '#032541' }}>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        The taken tools/equipment has been taken in good working conditions. If not, I will notify
                        management with photos before taking them. By signing below, I agree to be liable on the amount
                        of (get the total value from each tool cost x depreciation percentage x number of years, then
                        added to multiple tools) AED in case the tools were lost or damaged”
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
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
