import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private listBooks = [
    new Book(1, "The Slight Edge", "Jeff Olsen", "23.00"),
    new Book(2, "Atomic Habits", "James Clear", "18.00"),
    new Book(3, "So Good They Can't ignore you", "Cal Newport", "18.70")
  ]

  constructor() { }

  getBooks() : Book[]{
    return [...this.listBooks];
  }

  getBookById(id : number) : Book{
    return this.listBooks.find(
      book => book.id === id
    ) || new Book()
  }

  getNextId(){
    return this.listBooks[this.listBooks.length-1].id+1
  }

  addBook(book : Book){
    this.listBooks = [...this.listBooks, book];
  }

  editBook(book : Book){
    this.listBooks = this.listBooks.map(
      b => {
        if (b.id === book.id)
          return book
        else
          return b;
      }
    )
  }

  deleteBook(id : number){
    this.listBooks = this.listBooks.filter(
      b => b.id !== id
    )
  }


}
