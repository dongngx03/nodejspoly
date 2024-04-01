import { Router } from "express";
import AuthController from "../../controllers/AuthController";

const routeAuth = Router();

routeAuth.post('/register', AuthController.register)
routeAuth.post('/login', AuthController.login)

export default routeAuth