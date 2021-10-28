import { TabGroupComponent } from './tab-group.component';
import { TabBodyComponent } from './tab-body.component';
import { TabComponent } from './tab.component';
import { moduleMetadata, Story } from '@storybook/angular';
import { TabHeaderComponent } from './tab-header.component';
import { CardModule } from '../card/card.module';
import { CodeSnippetModule } from '../code-snippet/code-snippet.module';

export default {
  title: 'Tab Group',
  component: TabGroupComponent,
  argTypes: {},
};

const Template: Story = (args) => ({
  moduleMetadata: {
    declarations: [TabBodyComponent, TabComponent, TabHeaderComponent],
  },
  props: args,
  template: `<ukho-tab-group><ukho-tab [label]="'a'">test a</ukho-tab><ukho-tab [label]="'b'"><b>test b</b></ukho-tab></ukho-tab-group>`,
});

export const Basic: Story = Template.bind({});

export const withComplexContent: Story = (args) => ({
  moduleMetadata: {
    declarations: [TabBodyComponent, TabComponent, TabHeaderComponent],
    imports: [CardModule],
  },
  props: args,
  template: `<ukho-tab-group><ukho-tab [label]="'a'"><ukho-card title="title">You can put any html content in the body of a card. Such as <a href='#'>links</a> or <b>bold text</b></ukho-card></ukho-tab><ukho-tab [label]="'b'"><b>test b</b></ukho-tab></ukho-tab-group>`,
});

export const withCodeSnippet: Story = (args) => ({
  moduleMetadata: {
    declarations: [TabBodyComponent, TabComponent, TabHeaderComponent],
    imports: [CodeSnippetModule],
  },
  props: {
    code: `<main>
  <router-outlet></router-outlet>
</main>

<footer>&copy; Crown copyright 2020 UK Hydrographic Office</footer>`,
    code2: `  import { Component, Input } from '@angular/core';
import { MenuItem } from '../navtypes';

/* This is the footer component */
@Component({
  selector: 'ukho-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() imageLink = 'https://www.admiralty.co.uk/';
  @Input() imageSrc = '/svg/UKHO stacked logo.svg';
  @Input() imageAlt = 'Admiralty Maritime Data Solutions | UK Hydrographic Office';
  @Input() text = '© Crown copyright 2010 UK Hydrographic Office';
  @Input() navigation: MenuItem[] = [];
}`,
    language: 'html',
    language2: 'typescript',

    ...args,
  },
  template: `<ukho-tab-group>
  <ukho-tab [label]="'Html'"><ukho-code-snippet [code]="code" [language]="language"></ukho-code-snippet></ukho-tab>
  <ukho-tab [label]="'Typescript'"><ukho-code-snippet [code]="code2" [language]="language2"></ukho-code-snippet></ukho-tab>
  </ukho-tab-group>`,
});
