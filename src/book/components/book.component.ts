import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Book} from "../model/book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input()
  book: Book | undefined;
  @Output()
  edit = new EventEmitter<Book>();
  @Output()
  delete = new EventEmitter<Book>();


  constructor() {
  }

  editBook(book: Book | undefined) {
    this.edit.emit(book);
  }

  deleteBook(book: Book | undefined) {
    this.delete.emit(book);
  }
}
