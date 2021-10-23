import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketerOverviewComponent } from './marketer-overview.component';

describe('MarketerOverviewComponent', () => {
  let component: MarketerOverviewComponent;
  let fixture: ComponentFixture<MarketerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketerOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
