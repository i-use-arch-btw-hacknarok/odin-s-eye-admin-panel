import Box from "@mui/material/Box";
import {Card, CardContent, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
    return <Box
        sx={{
            display: 'grid',
            columnGap: 3,
            rowGap: 7,
            gridTemplateColumns: 'repeat(3, 1fr)',
        }}
    >
        <Card sx={{gridColumn: 'span 2'}}>
            <CardContent sx={{backgroundColor: "#C8F9CD"}}>
                <Typography variant='h5' sx={{color: 'black'}}>
                    Welcome Back!
                </Typography>
                <Typography variant='body2' sx={{color: 'black'}}>
                    Go ahead and organise new meetings
                </Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Typography variant='h6' sx={{color: 'white'}}>
                    Average Users increase ~2.5%
                </Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Typography variant='h6' sx={{color: 'white'}}>
                    Average Users increase ~2.5%
                </Typography>
            </CardContent>
        </Card>

        <Card>
            <CardContent>
                <Typography variant='h6' sx={{color: 'white'}}>
                    Average Users increase ~2.5%
                </Typography>
            </CardContent>
        </Card>

        <Card>
            <CardContent>
                <Typography variant='h6' sx={{color: 'white'}}>
                    Average Users increase ~2.5%
                </Typography>
            </CardContent>
        </Card>
    </Box>
}

export default Home;
