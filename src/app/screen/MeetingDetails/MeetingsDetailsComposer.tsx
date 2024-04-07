import React, {useEffect, useState} from 'react';
import { Box, Stepper, Step, StepButton, Button, Typography, Paper, Container } from '@mui/material';
import MeetingDetails from './MeetingDetails';
import MeetingComparer from './MeetingComparer';
import {Redo, Undo} from "@mui/icons-material";
import './MeetingsDetailsComposer.css';
import MeetingsOverview from "./MeetingsOverview";
import {useParams} from "react-router-dom";
import {getDataById} from "../../external/api";

const steps = ['Overview', 'Details', 'Comparer'];

const text = "This is a basic layout and you can add more functionality and style it further to match your application's look and feel. If you have more data related to the meeting, you can continue to add it in a similar manner, creating a comprehensive details page."
const modifiedText = "This is a very simple layout and you can add more functionality and style it better to match your application's look and wydmuszka. Supposing you have more data related to the meeting, you can try to add it in a similar manner, by always uwu a comprehensive details page."


export default function MeetingSteps() {
    let { conferenceId } = useParams();
    const [activeStep, setActiveStep] = useState(0);
    const [selectedMeeting, setSelectedMeeting] = useState({id:"", topic: ""});

    useEffect(() => {
        getDataById(conferenceId).then(data => {
            console.log(data)
            setSelectedMeeting(data);
        })
    }, []);



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
                // @ts-ignore
                return <MeetingsOverview conference={selectedMeeting}/>;
            case 1:
                return <MeetingDetails conference={selectedMeeting}/>;
            case 2:
                return <MeetingComparer originalContent={text} modifiedContent={modifiedText} />;
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
