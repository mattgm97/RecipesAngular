import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected =  new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
        'A super-tasty Schnitzel - just awesome!', 
        'https://www.savoredjourneys.com/wp-content/uploads/2015/10/schnitzel-germany.jpg', 
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big Fat Burguer',
         'What else you need to say?',
          'http://images.guiadohamburguer.com/fotos/75_mc-angus/640x480/01-mc-angus.jpg', 
          [
              new Ingredient('Buns', 2),
              new Ingredient('Meat', 1)
          ])
      ];

      constructor(private slService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice(); // returns a copy of the array
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}