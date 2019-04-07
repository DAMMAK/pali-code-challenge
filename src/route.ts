import { Request, Response, Router, NextFunction } from "express";
import Recipe from "./controller";
export default Router().post(
  "/getlist",
  async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.body;
    var temp: number = 0;
    id.forEach(async (element: number) => {
      const recipe = await Recipe.sort(element);
      var total = recipe.TotalIngredients;
      if (recipe) {
        if (temp === 0) {
          temp = total;
        } else if (total < temp) {
          temp = total;
        }
        res.json({ id: temp }).status(200);
      }
    });

    // recipe.then(data => console.log(data));
    next();
  }
);
