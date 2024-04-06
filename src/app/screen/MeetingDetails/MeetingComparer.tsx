import ContentCard from "../../component/Card/ContentCard/ContentCard";
import {Button, Card, CardContent, Container} from "@mui/material";
import StepCard from "../../component/Card/ChartCard/StepCard";
import HistoryCard from "../../component/Card/HistoryCard/HistoryCard";
import {ArrowRight, KeyboardArrowRight, Redo} from "@mui/icons-material";
import React from "react";
import {DiffMethod, StringDiff} from "react-string-diff";

interface Props {
    originalContent: string,
    modifiedContent: string
}

type ComparisonResult = {
    char: string;
    bgColor: string;
};


const MeetingComparer = ({originalContent, modifiedContent}: Props) => {

    return <Container sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '5%'
    }}>
        <Card elevation={5} sx={{boxShadow: '2px 2px 2px 2px rgba(255, 255, 255, 0.1)'}}>
            <CardContent sx={{
                color: 'white',
                backgroundColor: '#23242A',
                minHeight: '70vh',
                fontSize: '1.5em',
                overflow: 'auto'
            }}>
                {originalContent}
            </CardContent>
        </Card>
        <Button
            variant="contained"
            endIcon={<KeyboardArrowRight/>}
            onClick={() => {
            }}
            sx={{backgroundColor: 'green', height: 'fit-content'}}
        />
        <Card elevation={5} sx={{boxShadow: '2px 2px 2px 2px rgba(255, 255, 255, 0.1)'}}>
            <CardContent sx={{
                color: 'white',
                backgroundColor: '#23242A',
                minHeight: '70vh',
                fontSize: '1.5em',
                overflow: 'auto'
            }}>
                {// @ts-ignore
                <StringDiff oldValue={originalContent} newValue={modifiedContent} method={DiffMethod.WordsWithSpace}/>
                }
            </CardContent>
        </Card>


    </Container>
}

export default MeetingComparer;
