import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Pineapples', 2)
      ]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply another test',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*',
      [
        new Ingredient('Salmon', 2),
        new Ingredient('Butter', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
