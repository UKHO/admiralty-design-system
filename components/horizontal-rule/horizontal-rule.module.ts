import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalRuleComponent } from './horizontal-rule.component';

export { HorizontalRuleComponent } from './horizontal-rule.component';

@NgModule({
  declarations: [HorizontalRuleComponent],
  exports: [HorizontalRuleComponent],
  imports: [CommonModule],
})
export class HorizontalRuleModule {}
