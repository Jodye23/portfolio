import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupuComponent } from './pupu.component';

describe('PupuComponent', () => {
  let component: PupuComponent;
  let fixture: ComponentFixture<PupuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PupuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PupuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
