import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe_detail',
  templateUrl: './recipe_detail.component.html',
  styleUrls: ['./recipe_detail.component.css']
})

export class RecipeDetailComponent {
  @Input() recipe: Recipe;
}
