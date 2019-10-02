import {NgModule} from '@angular/core';
import {BreadcrumbsComponent} from './breadcrumbs.component';
import {CommonModule} from '@angular/common';

export {BreadcrumbsComponent} from './breadcrumbs.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent
    ],
    exports: [
        BreadcrumbsComponent
    ],
    imports: [
        CommonModule
    ],
})
export class BreadcrumbsModule {}
