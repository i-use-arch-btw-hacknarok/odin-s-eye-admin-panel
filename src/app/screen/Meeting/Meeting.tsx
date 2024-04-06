import CustomCard from "../../component/Card/CustomCard/CustomCard";
import {Container} from "@mui/material";
import {Phrase} from "../../types/Phrase";
import StepCard from "../../component/Card/ChartCard/StepCard";
import ContentCard from "../../component/Card/ContentCard/ContentCard";

const phrases: Phrase[] = [
    {
        content: 'Lorem Ipsum akwdnaoubwduoabnwdoia. ',
        focusPercentage: 50,
        timestamp: '2019-07-30T08:00'
    },
    {
        content: 'Lorem Ipsum adabnno. ',
        focusPercentage: 75,
        timestamp: '2019-07-30T08:05'
    },
    {
        content: 'Lorem Ipsum adabnno awnodanwod am kkmwzdawk . ',
        focusPercentage: 25,
        timestamp: '2019-07-30T08:10'
    },
    {
        content: 'Lorem Ipsum ala ma kota a kot ma ale i tak to jest.',
        focusPercentage: 0,
        timestamp: '2019-07-30T08:15'
    },
    {
        content: 'To mały krok dla ludzkości, ale dla karła normalny',
        focusPercentage: 100,
        timestamp: '2019-07-30T08:20'
    },
    {
        content: 'Kurccaczki mały krok dla ludzkości, ale dla karła normalny',
        focusPercentage: 60,
        timestamp: '2019-07-30T08:20'
    },
    {
        content: 'Lorem Ipsum akwdnaoubwduoabnwdoia. ',
        focusPercentage: 50,
        timestamp: '2019-07-30T08:21'
    },
    {
        content: 'Lorem Ipsum adabnno. ',
        focusPercentage: 75,
        timestamp: '2019-07-30T08:22'
    },
    {
        content: 'Lorem Ipsum adabnno awnodanwod am kkmwzdawk . ',
        focusPercentage: 25,
        timestamp: '2019-07-30T08:23'
    },
]

export default function Meeting() {

    const onHover = (itemIndex: number) => {
        console.log(phrases[itemIndex])
    }

    return <Container sx={{
        display: 'flex',
        gap: '5%'
    }}>
        <ContentCard header="default"
                     phrases={[...phrases, ...phrases]}
                     sx={{flex: 1, overflow: 'auto', maxHeight: '80vh'}}
        />

        <Container sx={{display: 'flex', flexDirection: 'column', flex: 1, gap: '5vh'}}>
            <StepCard sx={{flex: 1}} phrases={phrases} onHover={onHover}/>
            <StepCard sx={{flex: 1}} phrases={phrases} />
        </Container>

    </Container>
}
