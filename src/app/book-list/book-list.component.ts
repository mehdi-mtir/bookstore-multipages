import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  listBooks = [
    new Book(1, "The Slight Edge", "Jeff Olsen", "23.00"),
    new Book(2, "Atomic Habits", "James Clear", "18.00"),
    new Book(3, "So Good They Can't ignore you", "Cal Newport", "18.70")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
