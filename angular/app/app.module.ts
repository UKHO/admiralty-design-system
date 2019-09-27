import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BreadcrumbsModule} from "./breadcrumbs/breadcrumbs.module";
import {ButtonModule} from "./button/button.module";
import {CardModule} from "./card/card.module";
import {DialogueModule} from "./dialogue/dialogue.module";
import {ExpansionModule} from "./expansion/expansion.module";
import {HeaderModule} from "./header/header.module";
import {NavigationModule} from "./navigation/navigation.module";
import {RadioModule} from "./radio/radio.module";
import {ReadmoreModule} from "./readmore/readmore.module";
import {SearchModule} from "./search/search.module";
import {SelectModule} from "./select/select.module";
import {SidenavModule} from "./sidenav/sidenav.module";
import {TableModule} from "./table/table.module";
import {TextareaModule} from "./textarea/textarea.module";
import {TextinputModule} from "./textinput/textinput.module";
import {CheckboxModule} from "./checkbox/checkbox.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BreadcrumbsModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DialogueModule,
    ExpansionModule,
    HeaderModule,
    NavigationModule,
    RadioModule,
    ReadmoreModule,
    SearchModule,
    SelectModule,
    SidenavModule,
    TableModule,
    TextareaModule,
    TextinputModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
