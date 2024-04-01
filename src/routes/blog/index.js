import { Router } from "express";
import BlogController from "../../controllers/BlogController.js";

const routeBlog = Router();

routeBlog.post('/', BlogController.create)
routeBlog.get('/', BlogController.getAll)
routeBlog.put('/', BlogController.update)
routeBlog.delete('/', BlogController.delete)
routeBlog.get('/detail/:id', BlogController.getDetail)
export default routeBlog