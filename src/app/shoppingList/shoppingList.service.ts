import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/model/ingredient.model';

export class ShoppingListService {
    ingredientsChagedEvent = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[]= [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 15)
    ];

    getIngredients() {
        return this.ingredients.slice();
    } 

    addItem(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChagedEvent.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChagedEvent.emit(this.ingredients.slice());
    }
}