import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [CommonModule],
})
export class FooterModule {}
