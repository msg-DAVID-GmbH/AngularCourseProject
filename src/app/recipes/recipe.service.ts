import {Recipe} from './recipe.model';

export class RecipeService {

  private recipes = [
      new Recipe('Recipe 1', 'This is a test',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbElx8kYynTvJxzV0HkoXgPHqAJ96aal_vHRuLT4tanPbUqnq'),
      new Recipe('Recipe 2', 'This is a test',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbElx8kYynTvJxzV0HkoXgPHqAJ96aal_vHRuLT4tanPbUqnq')
    ];

  getRecipes() {
    // defensive copy through slice() because without it, a real reference to the array would be returned
    return this.recipes.slice();
  }
}
