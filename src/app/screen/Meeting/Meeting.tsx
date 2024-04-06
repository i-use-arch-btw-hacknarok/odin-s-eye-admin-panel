import CustomCard from "../../component/Card/CustomCard/CustomCard";
import {Container} from "@mui/material";
import {Phrase} from "../../types/Phrase";
import StepCard from "../../component/Card/ChartCard/StepCard";
import ContentCard from "../../component/Card/ContentCard/ContentCard";

const phrases: Phrase[] = [
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia. ', focusPercentage: 50},
    {content: 'Lorem Ipsum adabnno. ', focusPercentage: 75},
    {content: 'Lorem Ipsum adabnno awnodanwod am kkmwzdawk . ', focusPercentage: 25},
    {content: 'Lorem Ipsum ala ma kota a kot ma ale i tak to jest.', focusPercentage: 0},
    {content: 'To mały krok dla ludzkości, ale dla karła normalny', focusPercentage: 100},
]

export default function Meeting() {
    return <Container sx={{
        display: 'flex',
        gap: '5%'
    }}>
        <ContentCard header="default"
                    phrases={[...phrases, ...phrases]}
                    sx={{ flex: 1, overflow: 'auto', maxHeight: '80vh'}}
        />

        <Container sx={{display: 'flex', flexDirection: 'column', flex: 1, gap: '5vh'}}>
            <StepCard sx={{flex: 1}} phrases={[...phrases, ...phrases]}/>
            <StepCard sx={{flex: 1}} />
        </Container>

    </Container>
}
