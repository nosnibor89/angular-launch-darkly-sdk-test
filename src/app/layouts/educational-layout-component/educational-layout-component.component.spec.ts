import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalLayoutComponentComponent } from './educational-layout-component.component';

describe('EducationalLayoutComponentComponent', () => {
  let component: EducationalLayoutComponentComponent;
  let fixture: ComponentFixture<EducationalLayoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalLayoutComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationalLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
