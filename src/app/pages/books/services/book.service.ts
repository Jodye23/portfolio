import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBook, BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: IBook[] = [
    new BookModel('Il nome della rosa', 'Umberto Eco', 1980, 'Un misterioso crimine in un monastero...', 'https://www.lafeltrinelli.it/images/9788831459754_0_536_0_75.jpg'),
    new BookModel('1984', 'George Orwell', 1949, 'Una società distopica e totalitaria...', 'https://i.etsystatic.com/25126483/r/il/826fdb/2932014615/il_570xN.2932014615_7vba.jpg'),
    new BookModel('Lo straniero', 'Albert Camus', 1942, "L'opera, divisa in due parti, racconta...", 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/L%27%C3%89tranger_-_Albert_Camus.jpg/193px-L%27%C3%89tranger_-_Albert_Camus.jpg'),
    new BookModel('Alla ricerca del tempo perduto', 'Marcel Proust', 1927, 'Il primo libro narra...', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Proust_-_%C3%80_la_recherche_du_temps_perdu_%C3%A9dition_1919_tome_1.djvu/page1-220px-Proust_-_%C3%80_la_recherche_du_temps_perdu_%C3%A9dition_1919_tome_1.djvu.jpg'),
    new BookModel('Il piccolo principe', 'Antoine de Saint-Exupéry', 1943, 'Un pilota di aerei, precipitato nel deserto del Sahara...', 'https://www.ibs.it/images/5000000223336_0_0_536_0_75.jpg')
  ];

  private booksSubject: BehaviorSubject<IBook[]> = new BehaviorSubject(this.books);
  public books$: Observable<IBook[]> = this.booksSubject.asObservable();

  constructor() { }

  addBook(book: IBook): void {
    this.books.push(book);
    this.booksSubject.next(this.books);
  }

  removeBook(index: number): void {
    this.books.splice(index, 1);
    this.booksSubject.next(this.books);
  }

  updateBook(index: number, book: IBook): void {
    this.books[index] = book;
    this.booksSubject.next(this.books);
  }
}
