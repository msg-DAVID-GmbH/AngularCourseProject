import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes = [
    new Recipe('Recipe 1', 'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbElx8kYynTvJxzV0HkoXgPHqAJ96aal_vHRuLT4tanPbUqnq'
      , [new Ingredient('Carrot', 1), new Ingredient('Flour', 200)]),
    new Recipe('Recipe 2', 'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbElx8kYynTvJxzV0HkoXgPHqAJ96aal_vHRuLT4tanPbUqnq'
      , [new Ingredient('Apple', 1)])
  ];

  getRecipes() {
    // defensive copy through slice() because without it, a real reference to the array would be returned
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }
}
