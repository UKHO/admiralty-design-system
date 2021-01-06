export interface TestData {
  folio: string;
  title: string;
  from: string;
  to: string;
}

export const mockData = {
  headings: ['folio', 'title', 'from', 'to'],
  headingTitles: ['Folio', 'Title', 'From', 'To'],
  records: [
    {
      folio: '5600',
      title: 'The Solent and Approaches',
      from: '26/05/16',
      to: '26/05/16'
    },
    {
      folio: '5600',
      title: 'East Devon and Dorset Coast, Exmouth to Christchurch',
      from: '26/05/16',
      to: '26/05/16'
    },
    {
      folio: '5600',
      title: 'The West Country, Falmouth to Teignmouth',
      from: '26/05/16',
      to: '26/05/16'
    },
    {
      folio: '5600',
      title: 'Falmouth to Hartland Point including the Isles of Scilly',
      from: '26/05/16',
      to: '26/05/16'
    },
    {
      folio: '5600',
      title: 'The Channel Islands',
      from: '26/05/16',
      to: '26/05/16'
    },
    {
      folio: '5600',
      title: 'Chichester to Ramsgate and Calais to Oostende',
      from: '26/05/16',
      to: '26/05/16'
    }
  ]
};
