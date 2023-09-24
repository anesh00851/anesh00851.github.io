import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMatBottomSheetComponent } from './demo-mat-bottom-sheet.component';

describe('DemoMatBottomSheetComponent', () => {
  let component: DemoMatBottomSheetComponent;
  let fixture: ComponentFixture<DemoMatBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoMatBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMatBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
