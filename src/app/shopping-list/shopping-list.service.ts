import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

   getIngredient() {
    return this.ingredients.slice(); // returns a copy of ingredients
   }
   
   addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
   }

   addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); // ... spread operator to push the whole array into ingredients
    this.ingredientsChanged.emit(this.ingredients.slice());
   }
}
