import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCognitiveAnalysisComponent } from './demo-cognitive-analysis.component';

describe('DemoCognitiveAnalysisComponent', () => {
  let component: DemoCognitiveAnalysisComponent;
  let fixture: ComponentFixture<DemoCognitiveAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCognitiveAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCognitiveAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
