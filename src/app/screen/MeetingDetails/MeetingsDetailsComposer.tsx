import React, { useState } from 'react';
import { Box, Stepper, Step, StepButton, Button, Typography, Paper, Container } from '@mui/material';
import MeetingDetails from './MeetingDetails';
import MeetingComparer from './MeetingComparer';
import {Redo, Undo} from "@mui/icons-material";
import './MeetingsDetailsComposer.css';
import MeetingsOverview from "./MeetingsOverview";

const steps = ['Overwie', 'Details', 'Comparer'];

export default function MeetingSteps() {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedMeeting, setSelectedMeeting] = useState(null); // Replace with your meeting data type

    // @ts-ignore
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // @ts-ignore
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <MeetingsOverview />;
            case 1:
                return <MeetingDetails />;
            case 2:
                return <MeetingComparer />;
            default:
                return 'Unknown step';
        }
    };


    return (
        <Container sx={{ width: '100%', color: 'white' }}>
            <Paper sx={{ p: 3, my: 2, color: 'white' }} >
                <Stepper nonLinear activeStep={activeStep}  sx={{color: 'white'}}>
                    {steps.map((label, index) => (
                        <Step key={label}  sx={{color: 'white'}}>
                            <StepButton onClick={handleStep(index)}  sx={{color: 'white'}}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                {getStepContent(activeStep)}
            </Paper>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Button
                    variant="contained"
                    startIcon={<Undo />}
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    sx={{backgroundColor: 'green'}}
                />
                <Button
                    variant="contained"
                    endIcon={<Redo />}
                    onClick={handleNext}
                    disabled={activeStep === steps.length - 1}
                    sx={{backgroundColor: 'green'}}
                />
            </Box>
        </Container>
    );
}
