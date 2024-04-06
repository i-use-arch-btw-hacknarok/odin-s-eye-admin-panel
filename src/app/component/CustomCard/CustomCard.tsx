import React from "react";
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia} from "@mui/material";
import {Phrase} from "../../types/Phrase";

interface Props {
    children: any,
    sx?: any
}

const CustomCard = ({ children, sx }: Props) => {
    return (
        <Card sx={sx}>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
}

export default CustomCard;
