import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Book} from "../model/book";
import {environment} from "../../../../environments/environment";

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }
  basicUrl = 'http://localhost:8080';
  urlSuff = '/book/'

  getAllBooks() {
    return this.http.get<Book[]>(this.basicUrl + this.urlSuff + 'all');
  }

  getById(id: number) {
    return this.http.get<Book>(this.basicUrl + this.urlSuff + id);
  }

  save(book: Book) {
    return this.http.post(this.basicUrl + this.urlSuff + 'save', book);
  }

  remove(book: Book) {
    return this.http.delete(this.basicUrl + this.urlSuff + book.id);
  }
}
