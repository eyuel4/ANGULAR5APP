import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/model/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';


@Component({
    selector:'app-shippingListEdit',
    templateUrl:'../shoppingListEdit/shoppingListEdit.component.html',
    styleUrls:['../shoppingListEdit/shoppingListEdit.component.css']
})
export class ShoppingListEditComponent {
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    constructor(private shoppingListService : ShoppingListService) {

    }
    onAddItem() : void {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount);
        this.shoppingListService.addItem(newIngredient);
    }
}