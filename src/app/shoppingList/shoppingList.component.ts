import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingListService } from '../shoppingList/shoppingList.service';

@Component({
    selector:'app-shoppingList',
    templateUrl:'../shoppingList/shoppingList.component.html',
    styleUrls:['../shoppingList/shoppingList.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private subscription : Subscription;

    constructor(private shoopingListService: ShoppingListService) {

    }

    ngOnInit(): void {
        this.ingredients = this.shoopingListService.getIngredients();
        this.subscription = this.shoopingListService.ingredientsChagedEvent.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}