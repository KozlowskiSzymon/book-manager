import {Component, Inject, OnInit} from '@angular/core';
import {Book} from "../book/model/book";
import {DbService} from "../../db/db.service";
import {FormBuilder} from "@angular/forms"
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {BookFormComponent} from "../book-form/book-form.component";
import {BookService} from "../book/service/book.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'book-manager';

  books: Book[] = [];

  sortForm = this.formBuilder.group({
    name: false,
    author: false,
    price: false,
    available: false
  });

  filterForm = this.formBuilder.group({
    filter: '',
    priceFrom: '',
    priceTo: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAllBooks().subscribe(
      result => {
        this.books = result;
      }
    );
  }

  addBook() {
    this.openDialog(null, ).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.bookService.save(result).subscribe(
          () => this.loadBooks()
        );
      }
    })
  }

  removeBook(book: Book) {
    this.bookService.remove(book).subscribe(
      () => this.loadBooks()
    );

  }
  editBook(book: Book) {
    this.openDialog(book).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.bookService.save(result).subscribe(
          () => this.loadBooks()
        );
      }
    })
  }

  openDialog(book: Book | null) {
    return this.dialog.open(BookFormComponent, {
      disableClose: true,
      autoFocus: true,
      data: book,
      height: '50%',
      width: '60%'
    })
  }

  filter() {
    let filter = this.filterForm.value.filter.toLowerCase();
    let priceTo = this.filterForm.value.priceTo !== '' ? this.filterForm.value.priceTo : 9999999;
    let priceFrom = this.filterForm.value.priceFrom !== '' ? this.filterForm.value.priceFrom : 0;

    this.bookService.getAllBooks().subscribe(
      result => {
        this.books = result.filter(book => (book.title.toLowerCase().includes(filter)
          || book.description.toLowerCase().includes(filter)
          || book.author.toLowerCase().includes(filter)
          || book.genre.toLowerCase().includes(filter)));
        this.books = this.books.filter(book =>
          priceFrom <= parseFloat(book.price.substr(0, book.price.length - 3))
              && parseFloat(book.price.substr(0, book.price.length - 3)) <= priceTo
          );
      }
    );
  }

  sort(arg: string, checked: boolean) {

    this.sortForm.reset();

    if (arg === 'name' && checked) {
      this.sortForm.setValue({
        name: true,
        author: false,
        price: false,
        available: false      });
      this.books.sort((a,b) => this.compareName(a, b))
    }
    if (arg === 'author' && checked) {
      this.sortForm.setValue({
        name: false,
        author: true,
        price: false,
        available: false      });
      this.books.sort((a,b) => this.compareAuthor(a, b))
    }
    if (arg === 'price' && checked) {
      this.sortForm.setValue({
        name: false,
        author: false,
        price: true,
        available: false      });
      this.books.sort((a,b) => this.comparePrice(a, b))
    }
    if (arg === 'available' && checked) {
      this.sortForm.setValue({
        name: false,
        author: false,
        price: false,
        available: true      });
      this.books.sort((a,b) => this.compareAvailable(a, b))
    }
  }

  private compareName(a: Book, b: Book): number {
    return a.title > b.title ? 1 : -1;
  }
  private compareAuthor(a: Book, b: Book): number {
    return a.author > b.author ? 1 : -1;
  }
  private comparePrice(a: Book, b: Book): number {
    return a.price > b.price ? 1 : -1;
  }
  private compareAvailable(a: Book, b: Book): number {
    return a.available > b.available ? 1 : -1;
  }
}
