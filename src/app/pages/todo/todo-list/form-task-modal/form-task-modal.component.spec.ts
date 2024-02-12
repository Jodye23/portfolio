import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaskModalComponent } from './form-task-modal.component';

describe('FormTaskModalComponent', () => {
  let component: FormTaskModalComponent;
  let fixture: ComponentFixture<FormTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTaskModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
