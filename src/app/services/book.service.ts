import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  name: string;
  author: string;
  description: string;
  checkedOutName: string;
}


@Injectable({
  providedIn: 'root'
})

export class BookService {
  private apiUrl = 'http://localhost:8080'

  books: Book[];
  constructor(private http: HttpClient) {
    this.books = [];
  }

  // name, author, description params
  // TODO: restfulapi
  addBook(n: string, a: string, d: string): void {
    this.books.push(
      {name: n, author: a, description: d, checkedOutName: ""}
    )
  }

  searchBook(query: string): Observable<any> {
    // let foundBooks: Book[] = [];

    const url = `${this.apiUrl}/search/${query}`;
    const json = this.http.get<any>(url);

    


    // text search using name and author, and description
    // foundBooks = this.books.filter(book =>
    //   book.name.toLowerCase().includes(query.toLowerCase()) ||
    //   book.author.toLowerCase().includes(query.toLowerCase()) ||
    //   book.description.toLowerCase().includes(query.toLowerCase())
    // );
    return json;
  }

  checkOut(bookName: string){
    let tempName: string = 'tempSteve';
    this.books.forEach(item =>{
      if(item.name == bookName){
        item.checkedOutName = tempName;
      }
    });
  }

  returnBook(bookName: string): void{
    this.books.forEach(item => {
      if(item.name == bookName){
        item.checkedOutName = "";
      }
    });
  }




}
