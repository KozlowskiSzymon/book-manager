import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Book} from "../book/model/book";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm = this.formBuilder.group({
    id: 0,
    title: '',
    author: '',
    description: '',
    type: '',
    price: '',
    image: '',
    available: true
  });
  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<BookFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Book
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.bookForm.patchValue(this.data);
    }
  }

  save() {
    this.dialogRef.close(this.bookForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
