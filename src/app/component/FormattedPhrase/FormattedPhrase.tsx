import {Phrase} from "../../types/Phrase";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
    phrase: Phrase,
    isHighlighted: boolean | false
}



const FormattedPhrase = ({phrase, isHighlighted}: Props) => {

    const getColor = (statusPercentage: number) => {

        if(statusPercentage === 50)
            return 'white';

        return statusPercentage > 50 ? `rgb(0, ${255 * statusPercentage  / 140},0)` : `rgb(${255 * (statusPercentage + 10) / 30},0,0)`
    }

    return <span style={{
        color: getColor(phrase.focusPercentage),
        backgroundColor: isHighlighted ? 'lightgrey' : undefined
    }} >
        {phrase.content}
    </span>
}

export default FormattedPhrase;
