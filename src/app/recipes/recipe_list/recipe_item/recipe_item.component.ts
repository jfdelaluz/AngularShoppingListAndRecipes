import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe_item',
  templateUrl: './recipe_item.component.html',
  styleUrls: ['./recipe_item.component.css']
})

export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeItemSelected = new EventEmitter<void>();

  onSelectRecipeItem() {
    this.recipeItemSelected.emit();
  }
}
