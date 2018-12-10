import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component ({
  selector: 'app-recipe_list',
  templateUrl: 'recipe_list.component.html',
  styleUrls: ['./recipe_list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeToDisplay = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  recipeFromList(recipe: Recipe) {
    this.recipeToDisplay.emit(recipe);
  }
}
