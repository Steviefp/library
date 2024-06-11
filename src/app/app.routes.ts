import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';

export const routes: Routes = [
    { path: 'home', component: MainMenuComponent },
    { path: 'search', component: SearchBookComponent },
    { path: 'add', component: AddBookComponent },
    { path: 'return', component: ReturnBookComponent },



];
