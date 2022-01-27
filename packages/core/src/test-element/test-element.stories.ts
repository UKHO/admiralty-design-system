import { html } from 'lit';

import './test-element';

export default {
  title: 'Test Element',
};

export const Basic = () =>
  html`<style>
    * {
      font-family:Monospace;
    }
    h1 {
      color: green;
    }
    h2 {
      color: orange;
    }</style><h1>Outside h1</h1><h2>Outside h2</h2><my-element></my-element>`;
