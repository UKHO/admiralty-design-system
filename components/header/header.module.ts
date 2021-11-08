import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { HorizontalRuleModule } from '../horizontal-rule/horizontal-rule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, HorizontalRuleModule, BrowserAnimationsModule],
})
export class HeaderModule {}
