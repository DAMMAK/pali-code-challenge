import { Request, Response, Router } from "express";
import axios from "axios";
const task = Router().post("/getlist", (req: Request, res: Response, next) => {
  let { id } = req.body;
  let tempItem: any = "";
  let leastID = "";
  id.forEach((element: number) => {
    processRecipe(element).then(result => {
      if (tempItem === "") {
        tempItem = result.TotalIngredients;
        leastID = result.idMeal;
        return;
      }
      if (element < tempItem) {
        tempItem = element;
        leastID = result.idMeal;
        return;
      }
    });
  });
  res.send({ id: leastID }).status(200);
  next();
});

const processRecipe = (id: number) => {
  var obj = axios
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
  return obj;
};

export default task;
