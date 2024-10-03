import express from "express";
import BooksRoute from "./routes/libros.routes.js";
import apiRoute from "./api/routes/libros.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiRoute);
app.use(BooksRoute);

app.listen(3333, () => console.log("Ready..."));
