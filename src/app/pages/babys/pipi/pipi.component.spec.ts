import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipiComponent } from './pipi.component';

describe('PipiComponent', () => {
  let component: PipiComponent;
  let fixture: ComponentFixture<PipiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
