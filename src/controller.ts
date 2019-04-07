import { Request, Response, Router } from "express";
import axios from "axios";

class RecipeController {
  public leastID: any;
  constructor() {
    this.leastID = 0;
  }

  sort(id: Array<number>) {
    return id.reduce((acc: Promise<any>, cur): Promise<any> => {
      const a = axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cur}`)
        .then(result => {
          var ingredientCount: any = [];
          var data = result.data.meals[0];
          var keys = Object.keys(data);
          let filtered = keys.filter(item => item.includes("strIngredient"));
          filtered.forEach(element => {
            let ingredientVal = data[element];
            if (typeof ingredientVal === "string" && ingredientVal.length > 0)
              ingredientCount.push(ingredientVal);
          });
          if (ingredientCount.length < acc) {
            acc = ingredientCount.length;
          }
          return acc;
        });
      const b = a.then(data => console.log(data));
      return b;
      // });
    }, 0);
  }
}
export default new RecipeController();
