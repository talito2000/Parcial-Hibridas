import { Router } from "express";
import * as controller from "../controllers/libros.controllers.js";
import * as customerController from "../controllers/clientes.controllers.js";

const route = Router();

route.get("/books", controller.getBooks);
route.post("/books", controller.addNewBook);
route.put("/books/:id", controller.replaceBook);
route.patch("/books/:id", controller.updateBook);
route.delete("/books/:id", controller.deleteBook);

route.get("/customers", customerController.getCustomers);
route.post("/customers", customerController.addNewCustomer);
route.get("/customers/:id/books", customerController.getBooksByCustomerId);
route.post("/customers/:id/books", customerController.addBookToCustomer);

export default route;
