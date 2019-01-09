import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe_item',
  templateUrl: './recipe_item.component.html',
  styleUrls: ['./recipe_item.component.css']
})

export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() id: number;

  ngOnInit() {}
}
