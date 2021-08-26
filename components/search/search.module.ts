import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { TextinputModule } from '../textinput/textinput.module';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [CommonModule, ButtonModule, TextinputModule],
})
export class SearchModule {}
