import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoJoinTwoDivComponent } from './demo-join-two-div.component';

describe('DemoJoinTwoDivComponent', () => {
  let component: DemoJoinTwoDivComponent;
  let fixture: ComponentFixture<DemoJoinTwoDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoJoinTwoDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoJoinTwoDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
