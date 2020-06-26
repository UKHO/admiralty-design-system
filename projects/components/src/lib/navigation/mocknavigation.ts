import { Navigation } from '../navtypes';

export const mockNavigationBasic: Navigation = {
  heading: 'Main heading Basic',
};

export const mockNavigationWithSections: Navigation = {
  heading: 'Main heading with Sections',
  sections: [
    {
      title: 'Section One',
      href: '#section-one',
      subSections: [
        {
          title: 'SubSectionOne',
          href: '#sub-section-one',
          items: [
            { title: 'itemOne1a', href: '#itemOne1a' },
            { title: 'itemOne2a', href: '#itemOne2a' },
            { title: 'itemOne3a', href: '#itemOne3a' },
            { title: 'itemOne4a', href: '#itemOne4a' },
          ],
        },
        {
          title: 'SubSectionTwo',
          href: '#sub-section-two',
          items: [
            { title: 'itemOne1b', href: '#itemOne1b' },
            { title: 'itemOne2b', href: '#itemOne2b' },
            { title: 'itemOne3b', href: '#itemOne3b' },
            { title: 'itemOne4b', href: '#itemOne4b' },
          ],
        },
        {
          title: 'SubSectionThree',
          href: '#sub-section-three',
          items: [
            { title: 'itemOne1c', href: '#itemOne1c' },
            { title: 'itemOne2c', href: '#itemOne2c' },
            { title: 'itemOne3c', href: '#itemOne3c' },
            { title: 'itemOne4c', href: '#itemOne4c' },
          ],
        },
      ],
    },
    {
      title: 'Section Two',
      href: '#section-two',
      subSections: [
        {
          title: 'SubSection2One',
          href: '#sub-section-2one',
          items: [
            { title: 'itemTwo1a', href: '#itemTwo1a' },
            { title: 'itemTwo2a', href: '#itemTwo2a' },
            { title: 'itemTwo3a', href: '#itemTwo3a' },
            { title: 'itemTwo4a', href: '#itemTwo4a' },
          ],
        },
        {
          title: 'SubSection2Two',
          href: '#sub-section-2two',
          items: [
            { title: 'itemTwo1b', href: '#itemTwo1b' },
            { title: 'itemTwo2b', href: '#itemTwo2b' },
            { title: 'itemTwo3b', href: '#itemTwo3b' },
            { title: 'itemTwo4b', href: '#itemTwo4b' },
          ],
        },
        {
          title: 'SubSection2Three',
          href: '#sub-section-2three',
          items: [
            { title: 'itemTwo1c', href: '#itemTwo1c' },
            { title: 'itemTwo2c', href: '#itemTwo2c' },
            { title: 'itemTwo3c', href: '#itemTwo3c' },
            { title: 'itemTwo4c', href: '#itemTwo4c' },
          ],
        },
      ],
    },
    {
      title: 'Section Three',
      href: '#section-three',
      subSections: [
        {
          title: 'SubSection3One',
          href: '#sub-section-3one',
          items: [
            { title: 'item1aThree', href: '#item1aThree' },
            { title: 'item2aThree', href: '#item2aThree' },
            { title: 'item3aThree', href: '#item3aThree' },
            { title: 'item4aThree', href: '#item4aThree' },
          ],
        },
        {
          title: 'SubSection3Two',
          href: '#sub-section-3two',
          items: [
            { title: 'item1bThree', href: '#item1bThree' },
            { title: 'item2bThree', href: '#item2bThree' },
            { title: 'item3bThree', href: '#item3bThree' },
            { title: 'item4bThree', href: '#item4bThree' },
          ],
        },
        {
          title: 'SubSection3Three',
          href: '#sub-section-3three',
          items: [
            { title: 'item1cThree', href: '#item1cThree' },
            { title: 'item2cThree', href: '#item2cThree' },
            { title: 'item3cThree', href: '#item3cThree' },
            { title: 'item4cThree', href: '#item4cThree' },
          ],
        },
      ],
    },
  ],
};
