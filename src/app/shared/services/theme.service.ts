import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private colorSchemeSubject = new BehaviorSubject<string>('dark');
  colorScheme$ = this.colorSchemeSubject.asObservable();

  updateColorScheme(colorScheme: string) {
    this.colorSchemeSubject.next(colorScheme);
  }
}
