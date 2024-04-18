import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereComponent } from './here.component';

describe('HereComponent', () => {
  let component: HereComponent;
  let fixture: ComponentFixture<HereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
