import { CodeSnippetWrapperComponent, Example } from './code-snippet.stories.data';
import { CodeSnippetComponent } from './code-snippet.component';
import { Story } from '@storybook/angular';
import { ButtonModule } from '../button/button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from '../button/button.component';
import { CodeSnippetDirective } from './code-snippet.directive';

export default {
  title: 'Code Snippet',
  component: CodeSnippetComponent,
  argTypes: {},
};

const Template: Story = (args) => ({
  moduleMetadata: {
    declarations: [CodeSnippetDirective],
    imports: [ButtonModule, BrowserAnimationsModule],
  },
  props: args,
  template: `<ukho-code-snippet [code]="code" [language]="language"></ukho-code-snippet>`,
});

export const Empty: Story = Template.bind({});
Empty.args = {
  code: ``,
  language: 'html',
};

export const Html: Story = Template.bind({});
Html.args = {
  code: `<main>
  <router-outlet></router-outlet>
</main>

<footer>&copy; Crown copyright 2020 UK Hydrographic Office</footer>`,
  language: 'html',
};

const wrapperTemplate: Story<CodeSnippetWrapperComponent> = (args: CodeSnippetWrapperComponent) => ({
  moduleMetadata: {
    imports: [BrowserAnimationsModule],
    declarations: [ButtonComponent, CodeSnippetWrapperComponent, CodeSnippetComponent, CodeSnippetDirective],
  },
  props: {
    ...args,
  },
  template: `<ukho-code-snippet-wrapper [example]="example"></ukho-code-snippet-wrapper>`,
});

export const AngularTemplate: Story = wrapperTemplate.bind({});
AngularTemplate.args = {
  example: Example.AngularTemplate,
};

export const AngularClass: Story = Template.bind({});
AngularClass.args = {
  code: `  import { Component, Input } from '@angular/core';
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
  language: 'typescript',
};

const RestrictedHeightTemplate: Story = (args) => ({
  moduleMetadata: {
    declarations: [CodeSnippetDirective],
    imports: [ButtonModule, BrowserAnimationsModule],
  },
  props: args,
  template: `<div style="height: 500px;">
  <ukho-code-snippet [code]="code" [language]="language"></ukho-code-snippet>
  </div>`,
});

export const RestrictedHeight: Story = RestrictedHeightTemplate.bind({});
RestrictedHeight.args = {
  code: `<main>
  <router-outlet></router-outlet>
</main>

<footer>&copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>
<footer>&copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office &copy; Crown copyright 2020 UK Hydrographic Office</footer>`,
  language: 'html',
};
