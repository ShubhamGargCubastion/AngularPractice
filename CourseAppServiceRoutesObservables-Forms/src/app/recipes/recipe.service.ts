import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();
 private recipes: Recipe[] =[
    new Recipe('Pizza',
      'Pizza Recipe',
      'https://www.just-eat.ie/takeaways/assets/themes/base/images/en_ie/cuisines/home/large_pizza.gif',
      [
        new Ingredient('Cheese',5),
        new Ingredient('pizza crust',10)
      ]),
    new Recipe('Burger',
      'Burger Recipe Recipe',
      'https://f.roocdn.com/images/menus/49347/header-image.jpg?width=1200&height=630&auto=webp&format=jpg&fit=crop&v=1510818155',
      [
        new Ingredient('Buns',2),
        new Ingredient('Cheese',1)
      ])
  ];
  constructor(private sLService: ShoppingListService){}
  getRecipes() {
    return this.recipes.slice();    //exact copy of this array
  }

  getRecipe(index:number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {

    this.sLService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }


  updateRecipe(index:number, newRecipe: Recipe) {
        this.recipes[index]=newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
