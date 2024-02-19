import { Component, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IBook, BookModel } from '../models/book.model';
import { BookService } from '../services/book.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  private destroy$ = new Subject<void>();
  books: IBook[] = [];
  bookForm: FormGroup;
  newBookForm: FormGroup;
  editingBookIndex: number | null = null;
  visible: boolean = false;
  editVisible: boolean = false;

  constructor(private translate: TranslateService, private bookService: BookService, private fb: FormBuilder, private router: Router) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('it');
    this.bookForm = this.fb.group({
      title: [''],
      author: [''],
      publicationYear: [''],
      synopsis: [''],
      imageUrl: ['']
    });
    this.newBookForm = this.fb.group({
      title: [''],
      author: [''],
      publicationYear: [''],
      synopsis: [''],
      imageUrl: ['']
    });
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

  removeBook(index: number): void {
    this.bookService.removeBook(index);
  }

  openEditModal(index: number): void {
    if (index >= 0 && index < this.books.length) {
      this.editingBookIndex = index;
      this.bookForm.setValue(this.books[index]);
      this.editVisible = true;
    } else {
      console.error(`Invalid index: ${index}`);
    }
  }

  saveBook(): void {
    if (this.editingBookIndex !== null) {
      this.bookService.updateBook(this.editingBookIndex, new BookModel(
        this.bookForm.value.title,
        this.bookForm.value.author,
        this.bookForm.value.publicationYear,
        this.bookForm.value.synopsis,
        this.bookForm.value.imageUrl
      ));
      this.editVisible = false;
    }
  }

  openNewBookModal(): void {
    this.visible = true;
  }

  createBook(): void {
    this.bookService.addBook(new BookModel(
      this.newBookForm.value.title,
      this.newBookForm.value.author,
      this.newBookForm.value.publicationYear,
      this.newBookForm.value.synopsis,
      this.bookForm.value.imageUrl
    ));
    this.visible = false;
  }

  backToHome() {
    this.router.navigate(['/books']);
  }
}
