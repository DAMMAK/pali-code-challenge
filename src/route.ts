import { Request, Response, Router, NextFunction } from "express";
import Recipe from "./controller";
export default Router().post(
  "/getid",
  async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.body;
    const a = await Recipe.sort(id);
    // next();
    return res.send({ id: a }).status(200);
  }
);
