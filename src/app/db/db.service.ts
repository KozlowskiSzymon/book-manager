import { Injectable } from '@angular/core';
import {Book} from "../components/book/model/book";

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
        description: "Arrakis, zwana Diuną, to jedyne we wszechświecie źródło melanżu. Z rozkazu Padyszacha Imperatora planetę przejmują Atrydzi, zaciekli wrogowie władających nią dotychczas Harkonnenów. Zwycięstwo księcia Leto Atrydy jest jednak pozorne – przejęcie planety ukartowano. W odpowiedzi na atak Imperium i Harkonnenów dziedzic rodu Atrydów Paul staje na czele rdzennych mieszkańców Diuny i sięga po imperialny tron.",
        type: "Fantastyka",
        available: true,
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/97A/9788381881654.jpg",
        price: "41,77 zł"
      },
      {
        id: 2,
        title: "Wisielcza góra",
        author: "Paulina Hendel",
        description: "Przepraszam za wszystko – szepcze Anka, gdy czuje pętlę na szyi i patrzy w oczy brata po raz ostatni. Nigdy nie przypuszczała, że przyjazd do Grobowic sprawi, że odkryje nowy świat, obudzi duchy i stanie twarzą w twarz z prawdziwymi potworami. Antek myśli tylko o Nastce, która uciekła do mrocznego lasu. Wiej, ratuj się! Czy można jednak uciec przed demonami i przeznaczeniem? Pobyt u ciotek w odciętej od świata wiosce wydawał się idealną odskocznią od rodzinnych dramatów. ",
        type: "Fantastyka",
        available: true,
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/A92/9788366657533.jpg",
        price: "24,24 zł"
      },
      {
        id: 3,
        title: "Outsider",
        author: "Stephen King",
        description: "Wydaje się, że wszystko jest jasne. Wiadomo kto zabił, są na to dowody, ślady, świadkowie. Sprawa wygląda na taką, która oczywiście poraża swoim okrucieństwem, ale nie będzie sprawiała większych problemów. Czy na pewno? \"Outsider\" to wciągająca powieść Stephena Kinga, mistrza grozy i niepokoju!",
        type: "Fantastyka",
        available: true,
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/EA1/9788381690805.jpg",
        price: "27,86 zł"
      },
      {
        id: 4,
        title: "Chrzest ognia. Wiedźmin",
        author: "Andrzej Sapkowski",
        description: "\"Wiedźmin. Tom 5. Chrzest ognia\" to kontynuacja losów tytułowego zabójcy wampirów, kikimor i innych stworzeń czyhających na ludzkie życia. W tej części Geralt z Rivii wraz z Jaskrem nadal podąża tropem Ciri - magicznie uzdolnionej dziewczynki, z którą związany jest przeznaczeniem.",
        type: "Fantastyka",
        available: false,
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/2E1/9788375780673.jpg",
        price: "28,78 zł"
      },
      {
        id: 5,
        title: "Dom stu szeptów",
        author: "Graham Masterton",
        description: "Herbert Russell był naczelnikiem więzienia, który jako jedyny odważył się wykupić i zamieszkać w Allhallows Hall. Rezydencja położona na nieprzystępnych, mglistych wrzosowiskach w Dartmoor od lat uchodziła za nawiedzoną. Teraz czas Herberta minął, a posępna posiadłość odziedziczona została przez jego dzieci, z którymi od dawna był skłócony.",
        type: "Horror i groza",
        available: true,
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/202/9788382155778.jpg",
        price: "21,27 zł"
      },
      {
        id: 6,
        title: "Kajko i Kokosz. Szkoła latania",
        author: "Janusz Christa",
        description: "Pełna humoru graficzna opowieść dla prawdziwych miłośników “Kajka i Kokosza”, jednej z najsławniejszych polskich serii komiksowych o przygodach dwóch słowiańskich wojów. \"Szkoła latania\" to wspaniały album, którego nie może zabraknąć na półce z komiksami.",
        type: "Komiks",
        available: true,
        image: "https://cf1-taniaksiazka.statiki.pl/images/large/3E5/9788328159822.jpg",
        price: "17,11 zł"
      },
      {
        id: 7,
        title: "Przepaść",
        author: "Remigiusz Mróz",
        description: "W Tatrach Zachodnich dochodzi do zaginięcia młodej kobiety z Warszawy. Ostatnim razem widziana była przez turystów w okolicy Trzydniowiańskiego Wierchu, a potem przepadła bez wieści. Był to jej pierwszy wyjazd w góry, miała zamiar spędzić w nich tylko weekend, a w Zakopanem pojawiła się sama – mimo to wedle ustaleń policji szła czerwonym szlakiem w towarzystwie czterech mężczyzn.",
        type: "eBook",
        available: true,
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
    let found = this.books.find(x => x.id === book.id);
    if (found) {
      this.books[this.books.indexOf(found)] = book
    }
  }

  private increaseId(): number {
    return this.globalId = this.globalId + 1;
  }

}
