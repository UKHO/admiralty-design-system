import { NgModule } from '@angular/core';
import { RadioComponent } from './radio.component';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';

export { RadioComponent } from './radio.component';

@NgModule({
  declarations: [RadioComponent],
  exports: [RadioComponent],
  imports: [CommonModule, MatRadioModule],
})
export class RadioModule {}
