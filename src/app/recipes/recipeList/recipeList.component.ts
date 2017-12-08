import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-recipeList',
    templateUrl:'../recipeList/recipeList.component.html',
    styleUrls:['../recipeList/recipeList.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    constructor(private recipeService: RecipeService,
                private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
    }

    onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }
}