import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { ColourBlockComponent } from './colour-block.component';

export { ColourBlockComponent } from './colour-block.component';

@NgModule({
  declarations: [ColourBlockComponent],
  exports: [ColourBlockComponent],
  imports: [CommonModule, ButtonModule],
})
export class ColourBlockModule {}
