import {Component, OnInit} from '@angular/core';
import {Book} from "../../book/model/book";
import {DbService} from "../../db/db.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'book-manager';

  books: Book[] = [];

  constructor(
    private dbService: DbService) {
    dbService.initBookList();
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.books = this.dbService.getBooks();
  }

  addBook(book: Book) {
    this.dbService.add(book)
  }

  removeBook(book: Book) {
    this.dbService.remove(book);
  }
  editBook(book: Book) {
    this.dbService.edit(book);
  }
}
