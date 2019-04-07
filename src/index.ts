import express from "express";
import App from "./app";
import recipe from "./route";
import app from "./app";

const PORT = process.env.PORT || 3000;
app.use(recipe);
App.listen(PORT, () => console.log(`Listening to Port ${PORT}`));
