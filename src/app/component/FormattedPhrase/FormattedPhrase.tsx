import {Phrase} from "../../types/Phrase";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
    phrase: Phrase
}

const FormattedPhrase = ({phrase}: Props) => {

    const getColor = (statusPercentage: number) => {

        if(statusPercentage === 50)
            return 'white';

        return statusPercentage > 50 ? 'green' : 'red'
    }

    return <span style={{
        color: getColor(phrase.focusPercentage),
    }} >
        {phrase.content}
    </span>
}

export default FormattedPhrase;
