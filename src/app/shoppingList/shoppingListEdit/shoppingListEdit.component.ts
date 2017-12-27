import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/model/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';



@Component({
    selector:'app-shippingListEdit',
    templateUrl:'../shoppingListEdit/shoppingListEdit.component.html',
    styleUrls:['../shoppingListEdit/shoppingListEdit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') shoppingListForm : NgForm;
    subscription: Subscription;
    editMode =  false;
    editedItemIndex: number;
    editedItem: Ingredient;

    constructor(private shoppingListService : ShoppingListService) {

    }

    ngOnInit() {
        this.shoppingListService.startedEditing
            .subscribe(
                (index: number) => {
                    this.editedItemIndex = index;
                    this.editMode = true;
                    this.editedItem = this.shoppingListService.getIngredient(index);
                    this.shoppingListForm.setValue({
                        name: this.editedItem.name,
                        amount: this.editedItem.amount
                    })
                }
            );
    }

    onSubmit(form: NgForm) : void {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        if(this.editMode) {
            this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
        } else {
            this.shoppingListService.addItem(newIngredient);
        }
        this.editMode = false;
        form.reset();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onClear() {
        this.shoppingListForm.reset();
        this.editMode = false;
    }
    onDelete() : void {
        this.shoppingListService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    }
}