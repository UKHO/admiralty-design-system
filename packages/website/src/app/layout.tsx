'use client';
import '@ukho/admiralty-core/styles/admiralty.bundle.css';
import '@ukho/admiralty-core/themes/default.css';
import './globals.css';
import {
  AdmiraltyFooter,
  AdmiraltyHeader,
  AdmiraltyLink,
  AdmiraltySideBar,
  AdmiraltySideBarItem,
  AdmiraltySkipLink,
} from '@ukho/admiralty-react';
import { useRouter, usePathname } from 'next/navigation';
import { SideBarItemVariant } from '@ukho/admiralty-core';

const componentChildren: any[] = [
  { name: 'Overview', variant: 'tertiary', path: '/components' },
  { path: '/components/autocomplete', variant: 'tertiary', name: 'Autocomplete' },
  { path: '/components/breadcrumbs', variant: 'tertiary', name: 'Breadcrumbs' },
  { path: '/components/button', variant: 'tertiary', name: 'Button' },
  { path: '/components/card', variant: 'tertiary', name: 'Card' },
  { path: '/components/checkbox', variant: 'tertiary', name: 'Checkbox' },
  { path: '/components/colour-block', variant: 'tertiary', name: 'Colour Block' },
  { path: '/components/dialogue', variant: 'tertiary', name: 'Dialogue' },
  { path: '/components/error-summary', variant: 'tertiary', name: 'Error Summary' },
  { path: '/components/expansion', variant: 'tertiary', name: 'Expansion' },
  { path: '/components/file-input', variant: 'tertiary', name: 'File Input' },
  { path: '/components/footer', variant: 'tertiary', name: 'Footer' },
  { path: '/components/header', variant: 'tertiary', name: 'Header' },
  { path: '/components/horizontal-rule', variant: 'tertiary', name: 'Horizontal Rule' },
  { path: '/components/input', variant: 'tertiary', name: 'Input' },
  { path: '/components/link', variant: 'tertiary', name: 'Link' },
  { path: '/components/modal-dialog', variant: 'tertiary', name: 'Modal Dialog' },
  { path: '/components/paginator', variant: 'tertiary', name: 'Paginator' },
  { path: '/components/phase-banner', variant: 'tertiary', name: 'Phase Banner' },
  { path: '/components/pill', variant: 'tertiary', name: 'Pill' },
  { path: '/components/progress-bar', variant: 'tertiary', name: 'Progress Bar' },
  { path: '/components/radio', variant: 'tertiary', name: 'Radio' },
  { path: '/components/radio-group', variant: 'tertiary', name: 'Radio Group' },
  { path: '/components/read-more', variant: 'tertiary', name: 'Readmore' },
  { path: '/components/select', variant: 'tertiary', name: 'Select' },
  { path: '/components/side-bar', variant: 'tertiary', name: 'Side Bar' },
  { path: '/components/side-nav', variant: 'tertiary', name: 'Side Nav' },
  { path: '/components/skip-link', variant: 'tertiary', name: 'Skip Link' },
  { path: '/components/tab-group', variant: 'tertiary', name: 'Tab Group' },
  { path: '/components/table', variant: 'tertiary', name: 'Table' },
  { path: '/components/textarea', variant: 'tertiary', name: 'Textarea' },
]

const gettingStartedChildren: any[] = [
  { path: '/getting-started', variant: 'tertiary', name: 'Overview' },
  { path: '/getting-started/javascript', variant: 'tertiary', name: 'Javascript' },
  { path: '/getting-started/angular', variant: 'tertiary', name: 'Angular' },
  { path: '/getting-started/react', variant: 'tertiary', name: 'React' },
  { path: '/getting-started/customising-components', variant: 'tertiary', name: 'Customising' },
  { path: '/getting-started/migrating', variant: 'tertiary', name: 'Migrating' },
];

const principleChildren: any[] = [
  { path: '/principles', variant: 'tertiary', name: 'Overview' },
  { path: '/principles/accessibility', variant: 'tertiary', name: 'Accessibility' },
  { path: '/principles/contentdesign', variant: 'tertiary', name: 'Content Design' },
  { path: '/principles/design', variant: 'tertiary', name: 'Design' },
  { path: '/principles/userresearch', variant: 'tertiary', name: 'User Research' },
];

const patternsChildren: any[] = [
  { name: 'Overview', variant: 'tertiary', path: '/patterns' },
  { name: 'Page Not Found', variant: 'tertiary', path: '/patterns/page-not-found' },
  { name: 'Service Unavailable', variant: 'tertiary', path: '/patterns/service-unavailable' },
  { name: 'Service Error', variant: 'tertiary', path: '/patterns/service-error' }
];

const brandChildren: any[] = [
  { name: 'Overview', variant: 'tertiary', path: '/brand-guide' },
  { name: 'Typography', variant: 'tertiary', path: '/brand-guide/typography' },
  { name: 'Colour', variant: 'tertiary', path: '/brand-guide/colour' },
  { name: 'Images', variant: 'tertiary', path: '/brand-guide/images' },
  { name: 'Logos', variant: 'tertiary', path: '/brand-guide/logos' }
];

const sideBarItems = [
  {
    name: 'Getting Started',
    variant: 'secondary',
    slot: 'items',
    children: gettingStartedChildren
  },
  {
    name: 'Updates',
    variant: 'secondary',
    slot: 'items',
    children: [
      {
        name: 'Overview',
        variant: 'tertiary',
        path: ''
      }
    ]
  },
  {
    name: 'Components',
    variant: 'secondary',
    slot: 'items',
    children: componentChildren
  },
  {
    name: 'Patterns',
    variant: 'secondary',
    slot: 'items',
    children: patternsChildren
  },
  {
    name: 'Build on brand',
    variant: 'secondary',
    slot: 'items',
    children: brandChildren
  },
  {
    name: 'Principles',
    variant: 'secondary',
    slot: 'items',
    children: principleChildren
  },
  {
    name: 'Get help',
    variant: 'secondary',
    slot: 'items',
    children: [
      {
        name: 'Report a bug',
        variant: 'tertiary',
        path: ''
      },
      {
        name: 'Contact Us',
        variant: 'tertiary',
        path: ''
      }
    ]
  }
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <html lang='en'>
      <body>
        <AdmiraltySkipLink href='#main-content'></AdmiraltySkipLink>
        <AdmiraltyHeader
          headerTitle='Design System'
          onTitledClicked={() => router.push('/')}
          logoImgUrl='/svg/Admiralty stacked logo.svg'>
        </AdmiraltyHeader>
        <div style={{ display: 'flex', minHeight: '66vh' }}>
          <AdmiraltySideBar sideBarWidth='250px' showLogo={false}>
            {sideBarItems.map(({ name, variant, slot, children }) => (
              <AdmiraltySideBarItem key={name} suppress-redirect='true'
                                    variant={variant as SideBarItemVariant}
                                    slot={slot}
                                    itemText={name}>
                {children.map(({ name, variant, path }) => (
                  <AdmiraltySideBarItem key={name}
                                        onSideBarItemClick={() => router.push(path)}
                                        suppress-redirect='true'
                                        variant={variant as SideBarItemVariant}
                                        itemText={name}>
                  </AdmiraltySideBarItem>
                ))}
              </AdmiraltySideBarItem>
            ))}
          </AdmiraltySideBar>
          <main id='main-content'>{children}</main>
        </div>
        <AdmiraltyFooter imageSrc='/svg/UKHO stacked logo.svg'>
          <AdmiraltyLink href='http://www.example.com' new-tab='true'>
            Privacy Policy
          </AdmiraltyLink>
          <AdmiraltyLink href='/accessbility'>Accessibility</AdmiraltyLink>
        </AdmiraltyFooter>
      </body>
    </html>
  );
}

