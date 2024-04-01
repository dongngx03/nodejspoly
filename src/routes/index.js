import { Router } from "express";
import routeBlog from "./blog";
import routeProduct from "./product";
import routeCategory from "./category";
import routeAuth from "./auth";

const route = Router();

route.use('/blog', routeBlog)
route.use('/product', routeProduct)
route.use('/category', routeCategory)
route.use('/auth', routeAuth)


export default route