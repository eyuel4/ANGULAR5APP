import { Ingredient } from '../shared/model/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChagedEvent = new Subject<Ingredient[]>();
    private ingredients: Ingredient[]= [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 15)
    ];

    getIngredients() {
        return this.ingredients.slice();
    } 

    addItem(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChagedEvent.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChagedEvent.next(this.ingredients.slice());
    }
}