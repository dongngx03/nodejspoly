import { Router } from "express";
import routeBlog from "./blog/index.js";
import routeProduct from "./product/index.js";
import routeCategory from "./category/index.js";
import routeAuth from "./auth/index.js";

const route = Router();

route.use('/blog', routeBlog)
route.use('/product', routeProduct)
route.use('/category', routeCategory)
route.use('/auth', routeAuth)


export default route