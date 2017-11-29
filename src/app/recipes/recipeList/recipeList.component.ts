import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector:'app-recipeList',
    templateUrl:'../recipeList/recipeList.component.html',
    styleUrls:['../recipeList/recipeList.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes : Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',"https://get.pxhere.com/photo/dish-food-salad-vegetable-recipe-meat-beef-steak-kale-garnish-dining-refreshments-tenderloin-venison-piement-beef-tenderloin-horseradish-rib-eye-steak-roast-beef-sirloin-steak-meat-chop-flat-iron-steak-tafelspitz-1376527.jpg")
    ];

    constructor() {

    }

    ngOnInit(): void {
    
    }
}