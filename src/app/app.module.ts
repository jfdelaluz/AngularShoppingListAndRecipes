import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping_list/shopping_list.component';
import { RecipeBookComponent } from './recipe_book/recipe_book.component';
import { RecipeListComponent } from './recipe_book/recipe_list/recipe_list.component';
import { RecipeDetailComponent } from './recipe_book/recipe_detail/recipe_detail.component';
import { RecipeItemComponent } from './recipe_book/recipe_item/recipe_item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
