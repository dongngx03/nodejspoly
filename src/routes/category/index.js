import { Router } from "express";
import Category from "../../models/Category.js";

const routeCategory = Router();

routeCategory.post('/', async (req, res) => {
    try {
        const newCate = await Category.create(req.body)
        return res.status(201).json(newCate)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
})

export default routeCategory