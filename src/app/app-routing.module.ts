import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./components/book-list/book-list.component";
import {InfoComponent} from "./components/info/info.component";



const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'about', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
