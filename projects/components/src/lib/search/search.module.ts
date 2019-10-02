import {NgModule} from '@angular/core';
import {SearchComponent} from './search.component';
import {CommonModule} from '@angular/common';
import {ButtonModule} from "../button/button.module";
import {MatFormFieldModule} from "@angular/material/form-field";

export {SearchComponent} from './search.component';

@NgModule({
    declarations: [
        SearchComponent
    ],
    exports: [
        SearchComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        MatFormFieldModule,
    ],
})
export class SearchModule {}
