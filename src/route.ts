import { Request, Response, Router, NextFunction } from "express";
import Recipe from "./controller";
export default Router().post(
  "/getlist",
  async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.body;
    const a = Recipe.sort(id);
    console.log(a);
    next();
  }
);
