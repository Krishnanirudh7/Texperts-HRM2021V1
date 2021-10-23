import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketerInterviewsComponent } from './marketer-interviews.component';

describe('MarketerInterviewsComponent', () => {
  let component: MarketerInterviewsComponent;
  let fixture: ComponentFixture<MarketerInterviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketerInterviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketerInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
