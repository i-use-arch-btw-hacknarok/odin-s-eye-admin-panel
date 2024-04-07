import React from 'react';
import { Button, Container, Paper, Typography, Box, Divider } from '@mui/material';


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
        <Container maxWidth="md" sx={{ my: 4 }}>
            <Paper elevation={3} sx={{
                backgroundColor: '#23242A',
                color: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
                p: 3
            }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {meetingDetail.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#bbb' }} gutterBottom>
                    {meetingDetail.date} at Location: {meetingDetail.location}
                </Typography>
                <Divider sx={{ my: 2, backgroundColor: '#333' }} />
                <Typography variant="body1" sx={{ color: '#bbb', marginBottom: 3 }}>
                    {meetingDetail.description}
                </Typography>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 2,
                    flexWrap: 'wrap'
                }}>
                    <Button variant="contained" sx={{
                        backgroundColor: 'green',
                        '&:hover': {
                            backgroundColor: 'darkgreen'
                        },
                        flex: '1 1 auto',
                        margin: '5px'
                    }}>
                        <Typography variant='subtitle1' sx={{color: 'white', fontWeight: 'bold'}}>
                            Survey link
                        </Typography>
                    </Button>

                    <Button variant="contained" sx={{
                        backgroundColor: 'green',
                        '&:hover': {
                            backgroundColor: 'darkgreen'
                        },
                        flex: '1 1 auto',
                        margin: '5px'
                    }}>
                        <Typography variant='subtitle1' sx={{color: 'white', fontWeight: 'bold'}}>
                            Facebook Event
                        </Typography>
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default MeetingOverview;
