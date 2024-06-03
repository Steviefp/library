import { Injectable } from '@angular/core';

export interface Book {
  name: string;
  author: string;
  description: string;
}


@Injectable({
  providedIn: 'root'
})

export class BookService {
  books: Book[];
  constructor() {
    this.books = [
      { name: "Apple", author: "steven", description: "book about Apples published by Steven" },
      { name: "Orange", author: "price", description: "book about Oranges published by price" },
      { name: "Orange + Red", author: "josh", description: "book about Orange + Red published by josh" },
      { name: "Grapes", author: "bob", description: "book about Grapes published by bob" },
    ]
  }

  // name, author, description params
  addBook(n: string, a: string, d: string): void {
    this.books.push(
      {name: n, author: a, description: d}
    )
  }
  searchBook(query: string): Book[] {
    let foundBooks: Book[] = [];

    // text search using name and author, and description
    foundBooks = this.books.filter(book =>
      book.name.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.description.toLowerCase().includes(query.toLowerCase())
    );

    return foundBooks;

  }




}
