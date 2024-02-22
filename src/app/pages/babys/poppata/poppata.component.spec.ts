import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoppataComponent } from './poppata.component';

describe('PoppataComponent', () => {
  let component: PoppataComponent;
  let fixture: ComponentFixture<PoppataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoppataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoppataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
