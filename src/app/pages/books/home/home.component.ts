import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IBook } from '../models/book.model';
import { BookService } from '../services/book.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private destroy$ = new Subject<void>();
  books: IBook[] = [];

  constructor(private translate: TranslateService, public router: Router, private bookService: BookService) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('it');
  }

  ngOnInit(): void {
    this.bookService.books$
      .pipe(takeUntil(this.destroy$))
      .subscribe(books => this.books = books);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goToLibrary() {
    this.router.navigate(['books/library']);
  }
}
