import { Component, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe_item',
  templateUrl: './recipe_item.component.html',
  styleUrls: ['./recipe_item.component.css']
})

export class RecipeItemComponent {
  @Input('recipe') recipe: Recipe;
}
