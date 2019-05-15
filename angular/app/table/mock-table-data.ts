class Table {
    headings: string[];
    people: Person[];
}

interface Person {
    id: string
    name: string
    age: number
}

export const TABLE: Table = {
    headings: [
        'Id',
        'Name',
        'Age',
    ],
    people: [
        {
            id: '1',
            name: 'Jen',
            age: 36,
        },
        {
            id: '2',
            name: 'Dave',
            age: 25,
        },
        {
            id: '3',
            name: 'Jay',
            age: 47,
        }
    ]
}
