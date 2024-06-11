import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book, BookService } from '../services/book.service';

@Component({
  selector: 'app-return-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './return-book.component.html',
  styleUrl: './return-book.component.scss'
})
export class ReturnBookComponent {
  returnResults : Book[] = [];
  userName : string = "tempSteve";

  constructor(private bookService: BookService){
    this.bookService.books.forEach(item =>{
      if(item.checkedOutName == this.userName){
        this.returnResults.push(item);
      }
    });
  }

  onReturn(bookName: string){
    this.bookService.returnBook(bookName);
  }

}
