import { TableComponent } from './table.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';
describe('TableComponent', () => {
  let component: TableComponent<any>;
  let fixture: ComponentFixture<TableComponent<any>>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
