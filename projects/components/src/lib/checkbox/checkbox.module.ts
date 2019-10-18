import {NgModule} from '@angular/core';
import {CheckboxComponent} from './checkbox.component';
import {CommonModule} from '@angular/common';

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
    ],
})
export class CheckboxModule {}
