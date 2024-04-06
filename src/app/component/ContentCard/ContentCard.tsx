import Typography from "@mui/material/Typography";
import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import {Phrase} from "../../types/Phrase";

interface Props {
    header: string,
    phrases: Phrase[]
    sx: any
}


const ContentCard = ({header, sx, phrases}: Props) => {
    return <CustomCard sx={sx}>
        <Typography gutterBottom variant="h5" component="div" style={{color: '#828282'}} >
            { header }
        </Typography>
        <Typography variant="body2" style={{color: 'white'}}>
            {phrases.map(phrase => phrase.content)}
        </Typography>
    </CustomCard>
}

export default ContentCard;
