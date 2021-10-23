import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotListComponent } from './hot-list.component';

describe('HotListComponent', () => {
  let component: HotListComponent;
  let fixture: ComponentFixture<HotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
