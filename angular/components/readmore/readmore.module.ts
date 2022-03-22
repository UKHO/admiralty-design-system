import { NgModule } from '@angular/core';
import { ReadMoreComponent } from './readmore.component';
import { ButtonModule } from '../button/button.module';
import { CommonModule } from '@angular/common';

export { ReadMoreComponent } from './readmore.component';

@NgModule({
  declarations: [ReadMoreComponent],
  exports: [ReadMoreComponent],
  imports: [CommonModule, ButtonModule],
})
export class ReadmoreModule {}
