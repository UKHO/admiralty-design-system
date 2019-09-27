import {NgModule} from '@angular/core';
import {DialogueComponent} from './dialogue.component';
import {CommonModule} from '@angular/common';

export {DialogueComponent} from './dialogue.component';

@NgModule({
    declarations: [
        DialogueComponent
    ],
    exports: [
        DialogueComponent
    ],
    imports: [
        CommonModule
    ],
})
export class DialogueModule {}
