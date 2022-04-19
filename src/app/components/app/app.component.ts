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
export class AppComponent {

}
