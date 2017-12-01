import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipeList/recipeList.component';
import { RecipeItemComponent } from './recipes/recipeList/recipeItem/recipeItem.component';
import { ShoppingListComponent } from './shoppingList/shoppingList.component';
import { ShoppingListEditComponent } from './shoppingList/shoppingListEdit/shoppingListEdit.component'
import { RecipeDetailComponent } from './recipes/recipeDetail/recipeDetail.component';
import { DropDownDirective } from './shared/directive/dropdown.directive';
import { ShoppingListService } from './shoppingList/shoppingList.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeDetailComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
