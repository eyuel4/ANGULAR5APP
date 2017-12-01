import { Component, Input,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
    selector:'app-recipeItem',
    templateUrl:'../../recipeList/recipeItem/recipeItem.component.html',
    styleUrls:['../../recipeList/recipeItem/recipeItem.component.css']
})
export class RecipeItemComponent {
    @Input() recipe: Recipe;

    constructor(private recipeService: RecipeService) {

    }

    onItemSelected() : void {
        this.recipeService.recipeSelected.emit(this.recipe);
    }
}