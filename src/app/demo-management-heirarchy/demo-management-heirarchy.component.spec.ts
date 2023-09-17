import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoManagementHeirarchyComponent } from './demo-management-heirarchy.component';

describe('DemoManagementHeirarchyComponent', () => {
  let component: DemoManagementHeirarchyComponent;
  let fixture: ComponentFixture<DemoManagementHeirarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoManagementHeirarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoManagementHeirarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
