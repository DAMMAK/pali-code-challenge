import { Request, Response, Router } from "express";
import axios from "axios";

class RecipeController {
  public leastID: any;
  constructor() {
    this.leastID = 0;
  }

  sort(id: Array<number>) {
    var temp: number = 0;
    var b;
    id.forEach((cur, index) => {
      const a = axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cur}`)
        .then(result => {
          var acc: number = 0;
          var ingredientCount: any = [];
          var data = result.data.meals[0];
          var keys = Object.keys(data);
          let filtered = keys.filter(item => item.includes("strIngredient"));
          filtered.forEach(element => {
            let ingredientVal = data[element];
            if (typeof ingredientVal === "string" && ingredientVal.length > 0)
              ingredientCount.push(ingredientVal);
          });
          console.log(`${cur} = ${ingredientCount.length}`);
          return ingredientCount.length;
        });
      b = a.then(data => {
        if (temp === 0) {
          temp = data;
        } else if (temp > data) {
          temp = data;
        }
        return temp;
      });
      console.log(b);
    });
    return b;
  }
}
export default new RecipeController();
