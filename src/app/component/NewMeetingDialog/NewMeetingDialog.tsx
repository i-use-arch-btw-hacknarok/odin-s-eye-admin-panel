import React, {useEffect, useState} from 'react';
import {Dialog, Stepper, Step, StepLabel, TextField, Button, CircularProgress, Box} from '@mui/material';
import {CheckCircle} from "@mui/icons-material";
import TopicMeetingDialog from "./TopicMeetingDialog";
import DatePlaceMeetingDialog from "./DatePlaceMeetingDialog";
import FormMeetingDialog from "./FormMeetingDialog";
import {postData} from "../../external/api";

interface Props {
    isOpened: boolean | false,
    onClose: any
}

const steps = ['Details', 'Date & Location', 'Survey'];

const NewMeetingDialog = ({isOpened, onClose}: Props) => {
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    const [open, setOpen] = useState(false);
    const [topic, setTopic] = useState("");

    const onTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setTopic(event.target.value);
    };

    useEffect(() => {
        setOpen(isOpened)
    }, [isOpened])

    useEffect(() => {
        if(finished && !isOpened) {
            setActiveStep(0);
            setFinished(false);
            setLoading(false);
        }
    }, [finished, isOpened]);


    const onSubmit = () => {
        // @ts-ignore
        postData({topic: topic}).then(data => {
        });

    }

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            onSubmit();
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
                return <TopicMeetingDialog onTopicChange={onTopicChange} topic={topic}/>
            case 1:
                return <DatePlaceMeetingDialog />
            case 2:
                return <FormMeetingDialog />
            default:
                return null;
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
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
                    <Box textAlign="center" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <CheckCircle style={{ color: 'green', fontSize: 60 }} />
                        <Button variant="contained" color="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Box>
                ) : (
                    <Box>
                        <StepContent step={activeStep} />
                        <Box mt={2} textAlign="center" sx={{display: "flex"}}>
                            {loading ? (
                                <CircularProgress sx={{backgroundColor: "green"}}/>
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
