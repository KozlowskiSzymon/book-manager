import { Injectable } from '@angular/core';
import {Book} from "../book/model/book";

@Injectable({
  providedIn: 'root'
})
export class DbService {

  books: Book[] = [];
  globalId = 7;

  initBookList() {
    this.books.push(
      {
        id: 1,
        title: "Diuna. Kroniki Diuny",
        author: "Frank Herbert",
        desc: "",
        type: "Fantastyka",
        part: "1",
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/97A/9788381881654.jpg",
        price: "41,77 zł"
      },
      {
        id: 2,
        title: "Wisielcza góra",
        author: "Paulina Hendel",
        desc: "",
        type: "Fantastyka",
        part: "-",
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/A92/9788366657533.jpg",
        price: "24,24 zł"
      },
      {
        id: 3,
        title: "Outsider",
        author: "Stephen King",
        desc: "",
        type: "Fantastyka",
        part: "-",
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/EA1/9788381690805.jpg",
        price: "27,86 zł"
      },
      {
        id: 4,
        title: "Chrzest ognia. Wiedźmin",
        author: "Andrzej Sapkowski",
        desc: "",
        type: "Fantastyka",
        part: "5",
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/2E1/9788375780673.jpg",
        price: "28,78 zł"
      },
      {
        id: 5,
        title: "Dom stu szeptów",
        author: "Graham Masterton",
        desc: "",
        type: "Horror i groza",
        part: "-",
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/202/9788382155778.jpg",
        price: "21,27 zł"
      },
      {
        id: 6,
        title: "Kajko i Kokosz. Szkoła latania",
        author: "Janusz Christa",
        desc: "",
        type: "Komiks",
        part: "-",
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/3E5/9788328159822.jpg",
        price: "17,11 zł"
      },
      {
        id: 7,
        title: "Przepaść",
        author: "Remigiusz Mróz",
        desc: "",
        type: "eBook",
        part: "2",
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/9B8/@9788381957960.jpg",
        price: "31,21 zł"
      }
    )
  }

  getBooks(): Book[] {
    return this.books;
  }

  add(book: Book) {
    book.id = this.increaseId();
    this.books.push(book);
  }

  remove(book: Book) {
    let index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }

  edit(book: Book) {
    let index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }

  private increaseId(): number {
    return this.globalId = this.globalId + 1;
  }

}
