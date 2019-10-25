import { NgModule } from '@angular/core';
import { ReadMoreComponent } from './readmore.component';
import { CommonModule } from '@angular/common';

export { ReadMoreComponent } from './readmore.component';

@NgModule({
  declarations: [ReadMoreComponent],
  exports: [ReadMoreComponent],
  imports: [CommonModule],
})
export class ReadmoreModule {}
