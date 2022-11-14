import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookToEdit : Book = new Book();

  constructor(
    private activatedRoute : ActivatedRoute,
    private service : BookService,
    private router : Router) { }

  editBook(f : NgForm){
    this.service.editBook(this.bookToEdit);
    this.router.navigate(["/books"]);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        console.log(params['id']);
        this.bookToEdit = this.service.getBookById(+params['id']);
      });
  }

}
