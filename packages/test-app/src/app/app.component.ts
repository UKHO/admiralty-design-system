import { Component } from '@angular/core';
// import { MyButton } from '@ukho/design-system-angular/dist/design-system/lib/stencil-generated/components';

class AppDrawer extends HTMLElement {}

// @ts-ignore
// customElements.define('my-button', MyButton);
// console.log(MyButton);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
}
