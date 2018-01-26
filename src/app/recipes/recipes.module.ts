import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipeList/recipeList.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipeDetail/recipeDetail.component';
import { RecipeItemComponent } from './recipeList/recipeItem/recipeItem.component';
import { DropDownDirective } from '../shared/directive/dropdown.directive';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RecipesRoutingModule,
        SharedModule
    ]
})
export class RecipesModule {

}