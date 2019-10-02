import {NgModule} from '@angular/core';
import {CardComponent} from './card.component';
import {CommonModule} from '@angular/common';

export {CardComponent} from './card.component';

@NgModule({
    declarations: [
        CardComponent
    ],
    exports: [
        CardComponent
    ],
    imports: [
        CommonModule
    ],
})
export class CardModule {}
