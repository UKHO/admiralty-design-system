export interface TestData {
  header1: string;
  header2: string;
  header3: string;
  header4: string;
}

const mockRecords = [
  {
    header1: '5600',
    header2: 'The Solent and Approaches',
    header3: '26/05/16',
    header4: '26/05/16',
  },
  {
    header1: '5600',
    header2: 'East Devon and Dorset Coast, Exmouth to Christchurch',
    header3: '26/05/16',
    header4: '26/05/16',
  },
  {
    header1: '5600',
    header2: 'The West Country, Falmouth to Teignmouth',
    header3: '26/05/16',
    header4: '26/05/16',
  },
  {
    header1: '5600',
    header2: 'Falmouth to Hartland Point including the Isles of Scilly',
    header3: '26/05/16',
    header4: '26/05/16',
  },
  {
    header1: '5600',
    header2: 'The Channel Islands',
    header3: '26/05/16',
    header4: '26/05/16',
  },
  {
    header1: '5600',
    header2: 'Chichester to Ramsgate and Calais to Oostende',
    header3: '26/05/16',
    header4: '26/05/16',
  },
];
export const mockDataWithHeaders = {
  headings: [
    {
      headerTitle: 'Header 1',
      propertyName: 'header1',
    },
    {
      headerTitle: 'Header 2',
      propertyName: 'header2',
    },
    {
      headerTitle: 'Header 3',
      propertyName: 'header3',
    },
    {
      headerTitle: 'Header 4',
      propertyName: 'header4',
    },
  ],
  records: mockRecords,
};

export const mockDataNoHeaders = {
  headings: [
    {
      propertyName: 'header1',
    },
    {
      propertyName: 'header2',
    },
    {
      propertyName: 'header3',
    },
    {
      propertyName: 'header4',
    },
  ],
  records: mockRecords,
};
export const mockDataWithAllSorting = {
  headings: [
    {
      headerTitle: 'Header 1',
      sortable: true,
      propertyName: 'header1',
    },
    {
      headerTitle: 'Header 2',
      sortable: true,
      propertyName: 'header2',
    },
    {
      headerTitle: 'Header 3',
      sortable: true,
      propertyName: 'header3',
    },
    {
      headerTitle: 'Header 4',
      sortable: true,
      propertyName: 'header4',
    },
  ],
  records: mockRecords,
};

export const mockDataWithSomeSorting = {
  headings: [
    {
      headerTitle: 'Header 1',
      propertyName: 'header1',
    },
    {
      headerTitle: 'Header 2',
      sortable: true,
      propertyName: 'header2',
    },
    {
      headerTitle: 'Header 3',
      propertyName: 'header3',
    },
    {
      headerTitle: 'Header 4',
      sortable: true,
      propertyName: 'header4',
    },
  ],
  records: mockRecords,
};

const mockRecordsWithHtmlContent = [
  {
    header1: '5600',
    header2: '<a href="https://google.com">The Solent and Approaches</a>',
    header3: '26/05/16',
    header4: '26/05/16',
    header5: '<a href="https://google.com">Click Me!</a>',
  },
  {
    header1: '5600',
    header2: 'East Devon and Dorset Coast, Exmouth to Christchurch',
    header3: '26/05/16',
    header4: '26/05/16',
    header5: '<a href="https://google.com">Click Me!</a>',
  },
  {
    header1: '5600',
    header2: '<a href="https://google.com">The West Country, Falmouth to Teignmouth</a>',
    header3: '26/05/16',
    header4: '26/05/16',
    header5: '<a href="https://google.com">Click Me!</a>',
  },
  {
    header1: '5600',
    header2: 'Falmouth to Hartland Point including the Isles of Scilly',
    header3: '<a href="https://google.com">26/05/16</a>',
    header4: '26/05/16',
    header5: '<a href="https://google.com">Click Me!</a>',
  },
  {
    header1: '5600',
    header2: '<a href="https://google.com">The Channel Islands</a>',
    header3: '26/05/16',
    header4: '26/05/16',
    header5: '<a href="https://google.com">Click Me!</a>',
  },
  {
    header1: '5600',
    header2: 'Chichester to Ramsgate and Calais to Oostende',
    header3: '26/05/16',
    header4: '<a href="https://google.com">26/05/16</a>',
    header5: '<a href="https://google.com">Click Me!</a>',
  },
];

export const mockDataWithHtmlContent = {
  headings: [
    {
      headerTitle: 'Header 1',
      propertyName: 'header1',
    },
    {
      headerTitle: 'Header 2',
      propertyName: 'header2',
    },
    {
      headerTitle: 'Header 3',
      propertyName: 'header3',
    },
    {
      headerTitle: 'Header 4',
      propertyName: 'header4',
    },
    {
      headerTitle: 'Header 5',
      propertyName: 'header5',
    },
  ],
  records: mockRecordsWithHtmlContent,
};
