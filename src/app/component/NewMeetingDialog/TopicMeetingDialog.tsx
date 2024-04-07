import {Container, TextField} from "@mui/material";
import React from "react";
import './TopicMeetingDialog.css';

//@ts-ignore
const TopicMeetingDialog = ({onTopicChange, topic}) => {
    return <Container sx={{display: 'flex', flexDirection: 'column', gap: '5vh', width: "500px", height: "30vh"}}>
        <TextField fullWidth label="Topic"
                   onChange={onTopicChange}
                   value={topic}
                   sx={{border: 1, borderRadius: '10px', borderColor: 'white', backgroundColor: '#23242A'}}/>
        <TextField fullWidth label="Topic" sx={{border: 1, borderRadius: '10px', borderColor: 'white', backgroundColor: '#23242A'}}
        />
        <TextField fullWidth label="Topic" sx={{border: 1, borderRadius: '10px', borderColor: 'white', backgroundColor: '#23242A'}}
        />
    </Container>
}

export default TopicMeetingDialog;
