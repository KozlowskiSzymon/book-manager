import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book.component';
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [
    BookComponent
  ],
    imports: [
        CommonModule,
        MatTooltipModule
    ],
  exports: [
    BookComponent
  ]

})
export class BookModule { }
