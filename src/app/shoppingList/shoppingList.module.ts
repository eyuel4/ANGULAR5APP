import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shoppingList.component';
import { ShoppingListEditComponent } from './shoppingListEdit/shoppingListEdit.component';

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingListEditComponent 
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule {

}