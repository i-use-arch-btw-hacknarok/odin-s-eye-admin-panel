import * as React from 'react';
import {Box, Card, CardContent, CardMedia, Typography, Chip, Grid, Container} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    date: string;
}

const sampleProjects: Project[] = [
    {
        id: 1,
        title: 'hawidaopjw',
        description: 'farma jedwabnikuf',
        imageUrl: 'true_viking.png',
        category: 'Wodnik',
        date: '02.05.2023',
    },
    {
        id: 2,
        title: 'Game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'true_viking.png',
        category: 'Bomba',
        date: '02.05.2023',
    },
    {
        id: 3,
        title: 'Haoiyaaaah',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'logo.png',
        category: 'Zielsko',
        date: '02.05.2023',
    },
];

const Meetings = () => {
    return (
        <Card>
            <CardContent>
                <Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 2
                    }}>
                        <Typography variant="h5" component="div" sx={{fontWeight: 'bold', color: 'white'}}>
                            Current Streams
                        </Typography>
                        <Chip
                            icon={<CheckCircleOutlineIcon/>}
                            label="Planned & Ongoing"
                            variant="outlined"
                            sx={{color: 'green'}}
                            clickable
                        />
                    </Box>
                    <Container sx={{maxHeight: "70vh", overflow: 'auto'}}>
                        {sampleProjects.map((project) => (
                            <Grid item xs={12} md={6} lg={4} sx={{marginBottom: 5, boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)',}} key={project.id}>
                                <Card raised sx={{backgroundColor: '#23242A'}}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={project.imageUrl}
                                        alt={project.title}
                                        sx={{backgroundColor: '#23242A'}}
                                    />
                                    <CardContent sx={{backgroundColor: '#23242A'}}>
                                        <Typography gutterBottom variant="h6" component="h2" color="white">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="white">
                                            {project.description}
                                        </Typography>
                                        <Box sx={{
                                            mt: 2,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <Chip label={project.category} variant="outlined" size="small" sx={{color: 'white'}}/>
                                            <Typography variant="body2" color="white">
                                                {project.date}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Container>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Meetings;
