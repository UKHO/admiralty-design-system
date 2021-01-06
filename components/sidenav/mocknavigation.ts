import { SubSection } from '../navtypes';

export const mockSideNav: SubSection[] = [
  {
    title: 'SubSectionOne',
    href: '#sub-section-one',
    active: true,
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
];
