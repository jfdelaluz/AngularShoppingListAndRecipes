import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe_edit',
  templateUrl: './recipe_edit.component.html',
  styleUrls: ['./recipe_edit.component.css']
})

export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    );
  }
}
