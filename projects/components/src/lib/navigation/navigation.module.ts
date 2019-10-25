import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { CommonModule } from '@angular/common';

export { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [CommonModule],
})
export class NavigationModule {}
