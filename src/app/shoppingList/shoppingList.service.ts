import { Ingredient } from '../shared/model/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChagedEvent = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[]= [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 15)
    ];

    getIngredients() {
        return this.ingredients.slice();
    } 

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addItem(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChagedEvent.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChagedEvent.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChagedEvent.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChagedEvent.next(this.ingredients.slice());
    }
}