import { Request, Response, Router } from "express";
import axios from "axios";

class RecipeController {
  public leastID: any;
  constructor() {
    this.leastID = 0;
  }

  sort(id: number): Promise<any> {
    let obj = axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(result => {
        var ingredients: any = [];
        var data = result.data.meals[0];
        var keys = Object.keys(data);
        var filtered = keys.filter(item => {
          return item.includes("strIngredient");
        });
        filtered.forEach(element => {
          let ingredientValue = data[element];
          if (typeof ingredientValue === "string" && ingredientValue.length > 0)
            ingredients.push(ingredientValue);
        });
        return { ...data, TotalIngredients: ingredients.length };
      });
    return new Promise((resolve, reject) => resolve(obj));
  }
  getnumber(id: []) {
    var temp: number = 0;
    id.forEach(async (element: number) => {
      const recipe = await this.sort(element);
      var total = recipe.TotalIngredients;
      if (recipe) {
        if (temp === 0) {
          temp = total;
        } else if (total < temp) {
          temp = total;
        }
      }
    });
    if (temp != 0) {
      return temp;
    }
    // return new Promise((resolve, reject) => resolve(temp));
  }
}
export default new RecipeController();
