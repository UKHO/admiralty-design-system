import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TextinputComponent } from '../../app/textinput/textinput.component'
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule, FormsModule, FormControl, Validators } from '@angular/forms';

storiesOf('Text input', module)
.addDecorator(
    moduleMetadata({
    imports: [
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule
    ],
      declarations: [TextinputComponent],
    }),
  )
  .add('plain input', () => ({
    component: TextinputComponent,
    props: {
        validation: new FormControl('', [Validators.required, Validators.email]),
        inputText: { value: 'test inputText' }
    },
  }))
