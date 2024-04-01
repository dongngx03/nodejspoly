import { Router } from "express";
import AuthController from "../../controllers/AuthController.js";

const routeAuth = Router();

routeAuth.post('/register', AuthController.register)
routeAuth.post('/login', AuthController.login)

export default routeAuth