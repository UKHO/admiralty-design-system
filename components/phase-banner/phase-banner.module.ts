import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhaseBannerComponent } from './phase-banner.component';

@NgModule({
  declarations: [PhaseBannerComponent],
  exports: [PhaseBannerComponent],
  imports: [CommonModule],
})
export class PhaseBannerModule {}
