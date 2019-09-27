import {NgModule} from '@angular/core';
import {TextinputComponent} from './textinput.component';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

export {TextinputComponent} from './textinput.component';

@NgModule({
    declarations: [
        TextinputComponent
    ],
    exports: [
        TextinputComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class TextinputModule {}
