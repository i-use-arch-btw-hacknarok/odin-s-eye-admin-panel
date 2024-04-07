import {Container, TextField} from "@mui/material";
import React from "react";
import './TopicMeetingDialog.css';

const DatePlaceMeetingDialog = () => {
    return <Container sx={{display: 'flex', flexDirection: 'column', width: "500px", height: "30vh"}}>
        <TextField fullWidth type="date" label="Date" InputLabelProps={{ shrink: true }} sx={{border: 1, borderRadius: '10px', borderColor: 'white', backgroundColor: '#23242A'}}/>;
        <TextField fullWidth label="Location" sx={{border: 1, borderRadius: '10px', borderColor: 'white', backgroundColor: '#23242A'}} />
    </Container>
}

export default DatePlaceMeetingDialog;
