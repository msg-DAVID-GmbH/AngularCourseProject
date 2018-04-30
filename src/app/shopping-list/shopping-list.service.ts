import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 2),
    new Ingredient('Chilli', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients); // "spread-operator" of ES6
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
