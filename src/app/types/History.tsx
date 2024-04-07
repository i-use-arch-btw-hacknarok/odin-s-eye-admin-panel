export interface HistoryRecord {
    numberOfPeople: number,
    date: string
    averageAttentionSpan: number,
    meetingLengthInMinutes: number
}

const MockHistoryRecords: HistoryRecord[] = [
    {
        numberOfPeople: 15,
        date: '2019-07-30T08:21',
        averageAttentionSpan: 30,
        meetingLengthInMinutes: 23
    },
    {
        numberOfPeople: 25,
        date: '2019-07-31T08:21',
        averageAttentionSpan: 50,
        meetingLengthInMinutes: 27
    },
    {
        numberOfPeople: 32,
        date: '2019-07-31T08:21',
        averageAttentionSpan: 90,
        meetingLengthInMinutes: 21
    },
    {
        numberOfPeople: 40,
        date: '2019-07-31T08:21',
        averageAttentionSpan: 70,
        meetingLengthInMinutes: 40
    },
    {
        numberOfPeople: 30,
        date: '2019-07-31T08:21',
        averageAttentionSpan: 80,
        meetingLengthInMinutes: 15
    }
]

export {MockHistoryRecords}
