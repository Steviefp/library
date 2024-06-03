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
  searchResults : Book[] = [];
  constructor(private bookService: BookService){}

  onSearch(query:string){
    this.searchResults = this.bookService.searchBook(query);
    console.log(this.searchResults)
  }
}
