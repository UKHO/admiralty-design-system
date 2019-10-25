import { NgModule } from '@angular/core';
import {
  DialogueComponent,
  DialogueContentDirective,
  DialogueTitleDirective,
} from './dialogue.component';
import { CommonModule } from '@angular/common';

export { DialogueComponent } from './dialogue.component';

@NgModule({
  declarations: [
    DialogueComponent,
    DialogueTitleDirective,
    DialogueContentDirective,
  ],
  exports: [
    DialogueComponent,
    DialogueTitleDirective,
    DialogueContentDirective,
  ],
  imports: [CommonModule],
})
export class DialogueModule {}
