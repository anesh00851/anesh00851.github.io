import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPageNotFoundComponentComponent } from './demo-page-not-found-component.component';

describe('DemoPageNotFoundComponentComponent', () => {
  let component: DemoPageNotFoundComponentComponent;
  let fixture: ComponentFixture<DemoPageNotFoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPageNotFoundComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPageNotFoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
