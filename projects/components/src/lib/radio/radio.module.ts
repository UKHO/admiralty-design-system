import {NgModule} from '@angular/core';
import {RadioComponent} from './radio.component';
import {CommonModule} from '@angular/common';

export {RadioComponent} from './radio.component';

@NgModule({
  declarations: [RadioComponent],
  exports: [RadioComponent],
  imports: [CommonModule],
})
export class RadioModule {}
