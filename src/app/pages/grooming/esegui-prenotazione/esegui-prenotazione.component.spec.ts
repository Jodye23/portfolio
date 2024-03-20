import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EseguiPrenotazioneComponent } from './esegui-prenotazione.component';

describe('EseguiPrenotazioneComponent', () => {
  let component: EseguiPrenotazioneComponent;
  let fixture: ComponentFixture<EseguiPrenotazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EseguiPrenotazioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EseguiPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
