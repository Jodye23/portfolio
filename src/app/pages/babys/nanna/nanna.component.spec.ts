import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannaComponent } from './nanna.component';

describe('NannaComponent', () => {
  let component: NannaComponent;
  let fixture: ComponentFixture<NannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NannaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
