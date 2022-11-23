import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  listBooksChanged = new Subject<Book[]>()
  private listBooks : Book[] = []

  constructor(private http : HttpClient) { }

  getBooks(){
    //return [...this.listBooks];
    this.http.get<Book[]>('http://localhost:3000/books').subscribe(
      (books : Book[]) => {
        this.listBooks = books;
        this.listBooksChanged.next(this.listBooks);
      }
    )

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
    this.listBooksChanged.next(this.listBooks);
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
    this.listBooksChanged.next(this.listBooks);
  }

  deleteBook(id : number){
    this.listBooks = this.listBooks.filter(
      b => b.id !== id
    )
    this.listBooksChanged.next(this.listBooks);

    //return this.listBooks;

    //console.log(this.listBooks);
  }


}
