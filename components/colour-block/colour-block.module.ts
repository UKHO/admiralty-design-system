import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColourBlockComponent } from './colour-block.component';

@NgModule({
  declarations: [ColourBlockComponent],
  exports: [ColourBlockComponent],
  imports: [CommonModule],
})
export class ColourBlockModule {}
