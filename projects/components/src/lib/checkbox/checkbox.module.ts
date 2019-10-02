import {NgModule} from '@angular/core';
import {CheckboxComponent} from './checkbox.component';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from "@angular/material/checkbox";

export {CheckboxComponent} from './checkbox.component';

@NgModule({
    declarations: [
        CheckboxComponent
    ],
    exports: [
        CheckboxComponent
    ],
    imports: [
        CommonModule,
        MatCheckboxModule,
    ],
})
export class CheckboxModule {}
