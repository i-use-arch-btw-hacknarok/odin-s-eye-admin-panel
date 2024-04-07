import {Checkbox, Container, TextField} from "@mui/material";
import React from "react";
import './TopicMeetingDialog.css';
import Typography from "@mui/material/Typography";

const label = { inputProps: { 'aria-label': 'enable survey' } };

const FormMeetingDialog = () => {
    return <Container sx={{display: 'flex', flexDirection: 'column', alignItems:'center', width: "500px", height: "30vh"}}>
        <Typography sx={{color: 'white'}}>Generate survey</Typography>
        <Checkbox {...label} sx={{border: 1, borderRadius: '10px', borderColor: 'white', backgroundColor: '#23242A', width: 'fit-content'}} defaultChecked />
    </Container>
}

export default FormMeetingDialog;
