import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe_item',
  templateUrl: './recipe_item.component.html',
  styleUrls: ['./recipe_item.component.css']
})

export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onSelectRecipeItem() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
