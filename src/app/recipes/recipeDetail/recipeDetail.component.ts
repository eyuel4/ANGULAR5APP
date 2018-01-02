
import { Component, Input, OnInit } from '@angular/core'
import { Recipe } from '../recipes.model'
import { RecipeService } from '../recipe.service';

import { ActivatedRoute, Params ,Router} from '@angular/router'

@Component({
    selector:'app-recipeDetail',
    templateUrl:'../recipeDetail/recipeDetail.component.html',
    styleUrls:['../recipeDetail/recipeDetail.component.css']
})
export class RecipeDetailComponent implements OnInit {
     recipe: Recipe;
     id: number;

    constructor(private recipeService: RecipeService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {

    }

    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

    ngOnInit() {
        this.activatedRoute.params
        .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.id);
            }
        )
    }

    onEditRecipe() {
        this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
        //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activatedRoute});
    }

    OnDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }

}