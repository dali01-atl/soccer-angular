import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatchsComponent } from './add-matchs.component';

describe('AddMatchsComponent', () => {
  let component: AddMatchsComponent;
  let fixture: ComponentFixture<AddMatchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMatchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
