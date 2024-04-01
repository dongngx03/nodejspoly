import Blog from "../models/Blog.js"

const BlogController = {
    create: async (req, res) => {
        try {
            const data = await Blog.create({
                ...req.body
            })
            return res.status(200).json({
                message: "success!",
                data: data
            })
        } catch (error) {
            return res.status(500).json({
                name: error.name,
                error: error.message
            })
        }
    },
    getAll: async (req, res) => {
        try {
            const data = await Blog.find();
            return res.status(200).json({
                message : "success",
                data : data
            })
        } catch (error) {
            return res.status(500).json({
                name: error.name,
                error: error.message
            })
        }
    },
    update: async(req, res) => {
        try {
            const data = await Blog.findByIdAndUpdate(req.body._id, {
                ...req.body
            }, {new : true});

            return res.status(200).json({
                message : "success",
                data : data
            })
        } catch (error) {
            return res.status(500).json({
                name: error.name,
                error: error.message
            })
        }
    },
    delete : async (req, res) => {
        try {
            const data = await Blog.findByIdAndDelete(req.body._id)

            return res.status(200).json({
                message : "success",
                data : data
            })
        } catch (error) {
            return res.status(500).json({
                name: error.name,
                error: error.message
            })
        }
    },
    getDetail : async (req, res) => {
        try {
            const data = await Blog.findById(req.params.id)

            return res.status(200).json({
                message : "success",
                data : data
            })
        } catch (error) {
            return res.status(500).json({
                name: error.name,
                error: error.message
            })
        }
    }
} 

export default BlogController