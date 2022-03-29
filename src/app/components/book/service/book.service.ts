import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Book} from "../model/book";

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }
  basicUrl = 'http://localhost:8080/book/'

  getAllBooks() {
    return this.http.get<Book[]>(this.basicUrl + 'all');
  }

  getById(id: number) {
    return this.http.get<Book>(this.basicUrl + id);
  }

}
