import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component ({
  selector: 'app-recipe_list',
  templateUrl: 'recipe_list.component.html',
  styleUrls: ['./recipe_list.component.css']
})

export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply another test',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*'
    )
  ];
}
