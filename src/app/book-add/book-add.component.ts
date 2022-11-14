import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  constructor(private service : BookService, private router : Router) { }

  addBook(f : NgForm){

    const newBook = new Book(this.service.getNextId(), f.value.titre, f.value.auteur, f.value.prix);
    this.service.addBook(newBook);
    this.router.navigate(["/books"]);
  }

  ngOnInit(): void {
  }

}
