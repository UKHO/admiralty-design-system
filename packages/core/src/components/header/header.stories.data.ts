import { HeaderItem } from './header.types';
import { action } from '@storybook/addon-actions';

export const mockMenuItemsWithSubItems: HeaderItem[] = [
  {
    title: 'Item 1',
    subitems: [
      {
        title: 'sub item 1',
        clickAction:action('sub item clicked'),
      },
      {
        title: 'Super long sub navigation item for wrapping',
        clickAction:action('sub item clicked'),
      },
      {
        title: 'sub item 3',
        clickAction:action('sub item clicked'),
      },
    ],
  },
  {
    title: 'Components & Patterns',
    subitems: [
      {
        title: 'sub item 1',
        clickAction:action('sub item clicked'),
      },
      {
        title: 'sub item 2',
        clickAction:action('sub item clicked'),
      },
    ],
  },
  {
    title: 'Item 3',
    subitems: [
      {
        title: 'sub item 1',
        clickAction:action('sub item clicked'),
      },
    ],
  },
];

export const mockMenuItemsWithSubItemsAndNavActive: HeaderItem[] = [
  {
    title: 'Item 1',
    subitems: [
      {
        title: 'sub item 1',
        clickAction:action('sub item clicked'),
      },
      {
        title: 'Super long sub navigation item for wrapping',
        clickAction:action('sub item clicked'),
      },
      {
        title: 'sub item 3',
        clickAction:action('sub item clicked'),
      },
    ],
  },
  {
    title: 'Components & Patterns',
    navActive: true,
    subitems: [
      {
        title: 'sub item 1',
        clickAction:action('sub item clicked'),
      },
      {
        title: 'sub item 2',
        clickAction:action('sub item clicked'),
      },
    ],
  },
  {
    title: 'Item 3',
    subitems: [
      {
        title: 'sub item 1',
        clickAction:action('sub item clicked'),
      },
    ],
  },
];

export const mockMenuItemsWithSomeSubItems: HeaderItem[] = [
  {
    title: 'Item 1',
    subitems: [
      {
        title: 'sub item 1',
        clickAction:action('sub item clicked'),
      },
      {
        title: 'sub item 2',
        clickAction:action('sub item clicked'),
      },
      {
        title: 'sub item 3',
        clickAction:action('sub item clicked'),
      },
    ],
  },
  {
    title: 'Item 2',
    clickAction:action('item clicked'),
  },
  {
    title: 'Item 3',
    subitems: [
      {
        title: 'sub item 1',
        clickAction:action('sub item clicked'),
      },
    ],
  },
];

export const mockMenuItemsWithNoSubItems: HeaderItem[] = [
  {
    title: 'Item 1',
    clickAction:action('item clicked'),
  },
  {
    title: 'Item 2',
    clickAction:action('item clicked'),
  },
  {
    title: 'Item 3',
    clickAction:action('item clicked'),
  },
];

export const mockMenuItemsWithNoSubItemsAndNavActive: HeaderItem[] = [
  {
    title: 'Item 1',
    clickAction:action('item clicked'),
  },
  {
    title: 'Item 2',
    navActive: true,
    clickAction:action('item clicked'),
  },
  {
    title: 'Item 3',
    clickAction:action('item clicked'),
  },
];
