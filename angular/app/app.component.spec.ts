import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { TextinputComponent } from './textinput/textinput.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea/textarea.component';
import { SelectComponent } from './select/select.component';
import { MatSelectModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SearchComponent } from './search/search.component';
import { ExpansionComponent } from './expansion/expansion.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule
      ],
      declarations: [
        AppComponent,
        TableComponent,
        CardComponent,
        ButtonComponent,
        HeaderComponent,
        NavigationComponent,
        TextinputComponent,
        TextareaComponent,
        SelectComponent,
        RadioComponent,
        CheckboxComponent,
        SearchComponent,
        ExpansionComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ukho-components'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ukho-components');
  });
});
