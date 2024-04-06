import React from 'react';
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Grid,
    Container
} from '@mui/material';

// Sample meeting data
const meetingsData = [
    {
        id: 1,
        title: 'Quarterly Business Review',
        date: '2023-06-30',
        attendees: 12,
        description: 'A review of business performance in the last quarter.',
    },
    {
        id: 2,
        title: 'Product Roadmap Alignment',
        date: '2023-07-04',
        attendees: 8,
        description: 'Discussing the product roadmap for the next year.',
    },
    {
        id: 3,
        title: 'Marketing Strategy Meeting',
        date: '2023-07-10',
        attendees: 10,
        description: 'Planning the marketing strategy for the upcoming product launch.',
    },
];

const MeetingOverviewScreen: React.FC = () => {
    const handleCardClick = (meetingId: number) => {
        console.log('Clicked meeting with ID:', meetingId);
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                Meeting Overview
            </Typography>
            <Grid container spacing={4}>
                {meetingsData.map((meeting) => (
                    <Grid item xs={12} sm={6} md={4} key={meeting.id}>
                        <Card elevation={3}>
                            <CardActionArea onClick={() => handleCardClick(meeting.id)}>
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        {meeting.title}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" component="p">
                                        {meeting.description}
                                    </Typography>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                                        <Typography variant="body2" component="p">
                                            Date: {meeting.date}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            Attendees: {meeting.attendees}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MeetingOverviewScreen;
