import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    @Output() recipeFinalSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] =[
      new Recipe('Recipe 1','first test Recipe','https://www.ndtv.com/cooks/images/620-16.jpg'),
      new Recipe('Recipe 2','Second test Recipe','https://www.ndtv.com/cooks/images/620-16.jpg')

    ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
      this.recipeFinalSelected.emit(recipe);
  }

}
