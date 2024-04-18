import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationHsPageComponent } from './education-page.component';

describe('EducationHsPageComponent', () => {
  let component: EducationHsPageComponent;
  let fixture: ComponentFixture<EducationHsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationHsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationHsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
