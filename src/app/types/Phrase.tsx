export interface Phrase {
    content: string,
    focusPercentage: number,
    timestamp: string,
}

const MockPhrases: Phrase[] = [
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

export {MockPhrases}
