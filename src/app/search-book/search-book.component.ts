import { Component } from '@angular/core';
import { Book, BookService } from '../services/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.scss'
})
export class SearchBookComponent {
  query: string = "";
  results: any;
  searchResults : Book[] = [];
  constructor(private bookService: BookService){}

  onSearch(query:string){
    this.searchResults = [];
    this.bookService.searchBook(query).subscribe(
      data =>{
        this.searchResults.push(...data);
      },
      error =>{
        console.error("ERROR OCCURRED DURING SEARCH!: ", error)
      }
    );
    
  }

  onCheckOut(bookName: string){
    this.bookService.checkOut(bookName);
  }

}
