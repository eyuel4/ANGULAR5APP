import { Component } from '@angular/core'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Ingredient } from '../shared/model/ingredient.model';

@Component({
    selector:'app-shoppingList',
    templateUrl:'../shoppingList/shoppingList.component.html',
    styleUrls:['../shoppingList/shoppingList.component.css']
})

export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[]= [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 15)
    ];

    constructor() {

    }

    ngOnInit(): void {
    }
}