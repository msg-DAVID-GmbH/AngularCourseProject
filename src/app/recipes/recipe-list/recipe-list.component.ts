import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbElx8kYynTvJxzV0HkoXgPHqAJ96aal_vHRuLT4tanPbUqnq'),
    new Recipe('Recipe 2', 'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbElx8kYynTvJxzV0HkoXgPHqAJ96aal_vHRuLT4tanPbUqnq')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('recipe-list got event! New selected recipe: ' + recipe.name);
    this.recipeSelected.emit(recipe);
  }
}
