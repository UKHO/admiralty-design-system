import { storiesOf } from '@storybook/angular';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import {MenuItem} from '../navtypes';

const basicMenu: MenuItem[] = [
  {
    title: 'Test1',
  },
];

const threeCrumbsMenu: MenuItem[] = [
  {
    title: 'Test1',
  },
  {
    title: 'Test2',
  },
  {
    title: 'Test3',
    active: true
  },
];

storiesOf('Breadcrumbs', module)
  .add('basic', () => ({
    component: BreadcrumbsComponent,
    props: {
      items: basicMenu,
    },
  }))
  .add('threeCrumbs', () => ({
    component: BreadcrumbsComponent,
    props: {
      items: threeCrumbsMenu,
    },
  }));
