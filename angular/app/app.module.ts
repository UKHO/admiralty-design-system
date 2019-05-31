import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TextinputComponent } from './textinput/textinput.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea/textarea.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectComponent } from './select/select.component';
import { MatSelectModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SearchComponent } from './search/search.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ReadMoreComponent } from "./readmore/readmore.component";
import { DialogueComponent } from './dialogue/dialogue.component';
import {SidenavComponent} from "./sidenav/sidenav.component";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    ButtonComponent,
    HeaderComponent,
    NavigationComponent,
    TextinputComponent,
    TextareaComponent,
    SelectComponent,
    RadioComponent,
    CheckboxComponent,
    SearchComponent,
    ExpansionComponent,
    ReadMoreComponent,
    DialogueComponent,
    SidenavComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
