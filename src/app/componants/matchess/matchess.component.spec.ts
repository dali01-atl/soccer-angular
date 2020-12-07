import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchessComponent } from './matchess.component';

describe('MatchessComponent', () => {
  let component: MatchessComponent;
  let fixture: ComponentFixture<MatchessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
