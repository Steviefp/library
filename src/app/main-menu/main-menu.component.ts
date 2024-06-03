import { Component } from '@angular/core';
import { SearchBookComponent } from '../search-book/search-book.component';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from '../add-book/add-book.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [SearchBookComponent, CommonModule, AddBookComponent, RouterModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {

}
