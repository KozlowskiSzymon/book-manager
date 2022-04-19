import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import {BookModule} from "./components/book/book.module";
import {ReactiveFormsModule} from "@angular/forms";
import { BookFormComponent } from './components/book-form/book-form.component';
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {BookService} from "./components/book/service/book.service";
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from './components/info/info.component';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    InfoComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    BookModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogConfig, useValue: {} },
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
