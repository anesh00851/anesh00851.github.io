import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoObjectDescriptionComponent } from './demo-object-description.component';

describe('DemoObjectDescriptionComponent', () => {
  let component: DemoObjectDescriptionComponent;
  let fixture: ComponentFixture<DemoObjectDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoObjectDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoObjectDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
