import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createHostFactory } from '@ngneat/spectator/jest';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  const createHost = createHostFactory(HeaderComponent);

  it('should create', () => {
    const spectator = createHost('<ukho-header text="Header Text"></ukho-header>');
    expect(spectator.component).toBeTruthy();
  });
});
