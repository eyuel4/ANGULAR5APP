import { Component, Input,  } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
    selector:'app-recipeItem',
    templateUrl:'../../recipeList/recipeItem/recipeItem.component.html',
    styleUrls:['../../recipeList/recipeItem/recipeItem.component.css']
})
export class RecipeItemComponent {
    @Input() recipe: Recipe;
    @Input() id: number
    constructor() {

    }
}