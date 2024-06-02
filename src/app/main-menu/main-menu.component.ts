import { Component } from '@angular/core';
import { SearchBookComponent } from '../search-book/search-book.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [SearchBookComponent, CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  showSearch: boolean = false;

  toggleSearch() {
    console.log("Toggle search is being called!")
    this.showSearch = !this.showSearch;
  }

  toggleSearchOff(){
    this.showSearch = false;
  }

}
