import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { RecipeService } from '../recipe.service';

@Component({
    selector:'app-recipeList',
    templateUrl:'../recipeList/recipeList.component.html',
    styleUrls:['../recipeList/recipeList.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    constructor(private recipeService: RecipeService) {

    }

    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
    }
}