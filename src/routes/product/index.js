import { Router } from "express";
import ProductController from "../../controllers/ProductConntroller";
import CheckPermision from "../../middleware/CheckPermission";

const routeProduct = Router();
routeProduct.post('/', ProductController.create)
routeProduct.get('/', CheckPermision.admin, ProductController.getAll)
routeProduct.put('/', ProductController.update)
routeProduct.delete('/', ProductController.delete)
routeProduct.get('/detail/:id', ProductController.getDetail)

export default routeProduct