import { BreadcrumbsComponent } from './breadcrumbs.component';

export default {
  title: 'Navigation/Breadcrumbs',
  component: BreadcrumbsComponent,
  parameters: {
    componentSubtitle:
      "Breadcrumbs are a type of secondary navigation scheme which display a user's location in the site"
  }
};

export const basic = () => ({
  component: BreadcrumbsComponent,
  props: {
    items: [
      {
        title: 'Test1'
      }
    ]
  }
});

basic.story = {
  name: 'basic'
};

export const threeCrumbs = () => ({
  component: BreadcrumbsComponent,
  props: {
    items: [
      {
        title: 'Test1'
      },
      {
        title: 'Test2'
      },
      {
        title: 'Test3',
        active: true
      }
    ]
  }
});

threeCrumbs.story = {
  name: 'threeCrumbs'
};
