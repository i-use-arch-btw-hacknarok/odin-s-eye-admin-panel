import Typography from "@mui/material/Typography";
import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import {Phrase} from "../../../types/Phrase";
import FormattedPhrase from "../../FormattedPhrase/FormattedPhrase";
import {Conference} from "../../../external/api";

interface Props {
    header: string,
    conference: Phrase[],
    sx: any,
    selectedItemIndex?: number | null
}


const ContentCard: React.FC<Props> = ({header, sx, conference, selectedItemIndex}: Props) => {

    //@ts-ignore
    console.log(conference.Video)
    return (
        <CustomCard sx={sx}>
            <Typography gutterBottom variant="h5" component="div" style={{ color: '#828282' }}>
                {header}
            </Typography>
            <Typography variant="body2" style={{ color: 'white' }} sx={{ fontSize: "1.5em" }}>
                {
                    //@ts-ignore
                    conference.map((phrase, index) => (
                    <FormattedPhrase
                        phrase={phrase}
                        isHighlighted={selectedItemIndex === index}
                    />
                ))}
            </Typography>
        </CustomCard>
    );
}


export default ContentCard;
