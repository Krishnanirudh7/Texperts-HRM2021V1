import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketerAdminOverviewComponent } from './marketer-admin-overview.component';

describe('MarketerAdminOverviewComponent', () => {
  let component: MarketerAdminOverviewComponent;
  let fixture: ComponentFixture<MarketerAdminOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketerAdminOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketerAdminOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
