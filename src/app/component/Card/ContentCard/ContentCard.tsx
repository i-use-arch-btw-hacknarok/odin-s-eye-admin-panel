import Typography from "@mui/material/Typography";
import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import {Phrase} from "../../../types/Phrase";
import FormattedPhrase from "../../FormattedPhrase/FormattedPhrase";

interface Props {
    header: string,
    phrases: Phrase[]
    sx: any,
    selectedItemIndex?: number | null
}


const ContentCard: React.FC<Props> = ({header, sx, phrases, selectedItemIndex}: Props) => {
    return (
        <CustomCard sx={sx}>
            <Typography gutterBottom variant="h5" component="div" style={{ color: '#828282' }}>
                {header}
            </Typography>
            <Typography variant="body2" style={{ color: 'white' }} sx={{ fontSize: "1.5em" }}>
                {phrases.map((phrase, index) => (
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
