import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IBook } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private destroy$ = new Subject<void>();
  books: IBook[] = [];

  constructor(public router: Router, private bookService: BookService) { }

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
