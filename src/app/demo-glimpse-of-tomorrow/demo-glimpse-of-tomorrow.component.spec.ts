import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGlimpseOfTomorrowComponent } from './demo-glimpse-of-tomorrow.component';

describe('DemoGlimpseOfTomorrowComponent', () => {
  let component: DemoGlimpseOfTomorrowComponent;
  let fixture: ComponentFixture<DemoGlimpseOfTomorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoGlimpseOfTomorrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGlimpseOfTomorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
