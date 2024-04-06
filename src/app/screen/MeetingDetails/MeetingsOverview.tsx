import React from 'react';
import {
    Paper,
    Typography,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    Container,
    CardContent,
    Card
} from '@mui/material';


const meetingDetail: any = {
    id: 1,
    title: 'Quarterly Business Review',
    date: '2023-06-30',
    attendees: 12,
    attention: 42.6,
    location: '42-230 Koniecpol Waska',
    description: 'A review of business performance in the last quarter.',
};

const MeetingOverview: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{my: 4}}>
            <Paper elevation={3} sx={{
                backgroundColor: '#23242A',
                color: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
                p: 3
            }}>
                <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold'}}>
                    {meetingDetail.title}
                </Typography>
                <Typography variant="subtitle1" sx={{color: '#bbb'}} gutterBottom>
                    {meetingDetail.date} at {meetingDetail.time}
                </Typography>
                <Typography variant="subtitle1" sx={{color: '#bbb'}} gutterBottom>
                    Location: {meetingDetail.location}
                </Typography>
                <Divider sx={{my: 2, backgroundColor: '#333'}}/>
                <Typography variant="body1" sx={{color: '#bbb', marginBottom: 3}}>
                    {meetingDetail.description}
                </Typography>

                <Container sx={{display: 'flex', gap: '3%'}}>
                    <Card sx={{flex: 1}}>
                        <CardContent sx={{backgroundColor:'green'}}>
                            <Typography variant='h5' sx={{color: 'white'}}>
                                Attendes Number
                            </Typography>
                            <Typography variant='h5' sx={{color: 'white'}}>
                                {meetingDetail.attendees}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{flex: 1}}>
                        <CardContent sx={{backgroundColor:'green'}}>
                            <Typography variant='h5' sx={{color: 'white'}}>
                                Avg Attention Span
                            </Typography>
                            <Typography variant='h5' sx={{color: 'white'}}>
                                {meetingDetail.attention}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{flex: 1}}>
                        <CardContent sx={{backgroundColor:'green'}}>
                            <Typography variant='h5' sx={{color: 'white'}}>
                                Meeting Duration
                            </Typography>
                            <Typography variant='h5' sx={{color: 'white'}}>
                                25 min
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>

                <Container sx={{display: 'flex', gap: '3%', marginTop: "5vh"}}>
                    <Card sx={{flex: 1}}>
                        <CardContent sx={{backgroundColor:'green'}}>
                            <Typography variant='h5' sx={{color: 'white'}}>
                                Ankieta link
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{flex: 1}}>
                        <CardContent sx={{backgroundColor:'green'}}>
                            <Typography variant='h5' sx={{color: 'white'}}>
                                Facebook Event
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </Paper>
        </Container>
    );
};

export default MeetingOverview;
