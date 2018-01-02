import { Component, OnDestroy } from '@angular/core';
import { Recipe } from '../recipes.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector:'app-recipeList',
    templateUrl:'../recipeList/recipeList.component.html',
    styleUrls:['../recipeList/recipeList.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes: Recipe[];
    subscription: Subscription;

    constructor(private recipeService: RecipeService,
                private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
       this.subscription = this.recipeService.recipesChanged
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        )
        this.recipes = this.recipeService.getRecipes();
    }

    onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}