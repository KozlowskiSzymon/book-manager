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

  orderBook() {
    console.log('Zamawianie dosepne już wkrótce!')
  }

}
