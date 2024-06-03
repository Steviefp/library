import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
  title: string = "";
  author: string = "";
  description: string = "";

  constructor(private bookService: BookService){}

  onAdd(title: string, author: string, description: string): void{
    this.bookService.addBook(title,author,description);
  }

}
