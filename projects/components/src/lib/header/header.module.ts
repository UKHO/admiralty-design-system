import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {CommonModule} from '@angular/common';

export {HeaderComponent} from './header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule
    ],
})
export class HeaderModule {}
