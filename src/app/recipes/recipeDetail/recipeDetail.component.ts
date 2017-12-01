
import { Component, Input, OnInit } from '@angular/core'
import { Recipe } from '../recipes.model'
import { RecipeService } from '../recipe.service';

@Component({
    selector:'app-recipeDetail',
    templateUrl:'../recipeDetail/recipeDetail.component.html',
    styleUrls:['../recipeDetail/recipeDetail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() recipe: Recipe;

    constructor(private recipeService: RecipeService) {

    }

    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

    ngOnInit() {

    }

}