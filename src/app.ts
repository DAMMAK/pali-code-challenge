import { Request, Response } from "express";
import bodyParser from "body-parser";
import express from "express";
class App {
  public app: express.Application;
  constructor() {
    this.enableCors();
    this.app = express();
    this.app.use(bodyParser.json());
  }
  enableCors(): void {
    // this.app.use((req: Request, res: Response, next) => {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header(
    //     "Access-Control-Allow-Methods",
    //     "GET, POST, PUT, DELETE, OPTIONS, PATCH"
    //   );
    //   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    //   next();
    // });
  }
}
export default new App().app;
