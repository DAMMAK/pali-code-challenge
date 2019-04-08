import express from "express";
import App from "./src/app";
import recipe from "./src/route";
import app from "./src/app";

const PORT = process.env.PORT || 4000;
app.use(recipe);
App.listen(PORT, () => console.log(`Listening to Port ${PORT}`));
