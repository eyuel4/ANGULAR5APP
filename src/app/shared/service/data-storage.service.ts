import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../../recipes/recipe.service';
import { Recipe } from '../../recipes/recipes.model';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, private recipeService: RecipeService,
                private authService: AuthService) {

    }

    storeRecipes() {
        const token = this.authService.getToken();

        return this.httpClient.put('https://recipebook-df0a6.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();

        //this.httpClient.get<Recipe[]>('https://recipebook-df0a6.firebaseio.com/recipes.json?auth='+ token)
        this.httpClient.get<Recipe[]>('https://recipebook-df0a6.firebaseio.com/recipes.json?auth='+ token, {
            observe: 'body',
            responseType: 'json' 
        })
            .map(
                (recipes) => {
                    console.log(recipes);
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']){
                            console.log(recipe);
                            recipe['ingredients']= [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipe(recipes);
                }
            );
/*  Using Http
            this.httpClient.get('https://recipebook-df0a6.firebaseio.com/recipes.json?auth='+ token)
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']){
                            console.log(recipe);
                            recipe['ingredients']= [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipe(recipes);
                }
            );
            */
    }
}