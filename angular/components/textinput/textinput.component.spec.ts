import { TestBed } from '@angular/core/testing';

import { TextinputComponent } from './textinput.component';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NgControl, FormControl, Validators } from '@angular/forms';
import { createHostFactory } from '@ngneat/spectator/jest';

describe('TextinputComponent', () => {
  const createHost = createHostFactory({ component: TextinputComponent, providers: [NgControl] });

  it('should create', () => {
    const spectator = createHost('<ukho-textinput label="Name"></ukho-textinput>');
    expect(spectator.component).toBeTruthy();
  });
});
