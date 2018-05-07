import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 2),
    new Ingredient('Chilli', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients); // "spread-operator" of ES6
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
