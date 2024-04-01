import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            min : 6,
            max : 100

        },
        content: {
            type: String,
            require: true,
            min : 6,
            max : 10

        },
        author: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Blog = mongoose.model("Blogs", BlogSchema)

export default Blog