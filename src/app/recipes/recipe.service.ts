import { Recipe } from './recipes.model';
import {Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/model/ingredient.model';

import { ShoppingListService } from '../shoppingList/shoppingList.service';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes : Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test',
            "https://get.pxhere.com/photo/dish-food-salad-vegetable-recipe-meat-beef-steak-kale-garnish-dining-refreshments-tenderloin-venison-piement-beef-tenderloin-horseradish-rib-eye-steak-roast-beef-sirloin-steak-meat-chop-flat-iron-steak-tafelspitz-1376527.jpg",
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        
            new Recipe('Burger Recipe',
             'This is a burger',
             "https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238247__340.jpg",
             [
                 new Ingredient('Buns', 2),
                 new Ingredient('Meat', 1)
            ])
    ];
    
    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipes():Recipe[] {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService;
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
    
    setRecipe(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}