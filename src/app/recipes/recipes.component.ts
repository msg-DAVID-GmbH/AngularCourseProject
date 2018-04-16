import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe) {
    console.log('recipes-component got event! New selected recipe: ' + recipe.name);
    this.selectedRecipe = recipe;
  }

}
