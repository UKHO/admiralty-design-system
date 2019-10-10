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
  },
];

storiesOf('Breadcrumbs', module)
  .add('basic', () => ({
    component: BreadcrumbsComponent,
    props: {
      navigation: basicMenu,
    },
  }))
  .add('threeCrumbs', () => ({
    component: BreadcrumbsComponent,
    props: {
      navigation: threeCrumbsMenu,
    },
  }));
