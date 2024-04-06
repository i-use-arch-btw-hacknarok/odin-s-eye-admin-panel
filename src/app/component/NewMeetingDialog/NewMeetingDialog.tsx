import React, { useState } from 'react';
import {Dialog, Stepper, Step, StepLabel, TextField, Button, CircularProgress, Box} from '@mui/material';
import {CheckCircle} from "@mui/icons-material";

interface Props {
    isOpened: boolean | false,
    onClose: any
}

const steps = ['Topic', 'Pick a date', 'Send invites'];

const NewMeetingDialog = ({isOpened, onClose}: Props) => {
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    const [open, setOpen] = useState(isOpened);

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setFinished(true);
            }, 1000);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    const StepContent = ({ step }: any) => {
        switch (step) {
            case 0:
                return <TextField fullWidth label="Topic" />;
            case 1:
                return <TextField fullWidth type="date" label="Date" InputLabelProps={{ shrink: true }} />;
            case 2:
                return <TextField fullWidth label="Email" />;
            default:
                return null;
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            sx={{}}
            aria-labelledby="form-dialog-title"
        >
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box p={3}>
                {finished ? (
                    <Box textAlign="center">
                        <CheckCircle style={{ color: 'green', fontSize: 60 }} />
                        <Button variant="contained" color="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Box>
                ) : (
                    <Box>
                        <StepContent step={activeStep} />
                        <Box mt={2} textAlign="center">
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            )}
                        </Box>
                    </Box>
                )}
            </Box>
        </Dialog>
    );
};

export default NewMeetingDialog;
