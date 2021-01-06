import { FileInputComponent } from './file-input.component';
import { createHostFactory } from '@ngneat/spectator/jest';
import { NgControl } from '@angular/forms';

jest.mock('filesize', () => ({ filesize: jest.fn() }));

describe('FileInputComponent', () => {
  const createHost = createHostFactory({ component: FileInputComponent, providers: [NgControl] });

  it('should create', () => {
    const spectator = createHost('<ukho-file-input></ukho-file-input>');
    expect(spectator.component).toBeTruthy();
  });
});
