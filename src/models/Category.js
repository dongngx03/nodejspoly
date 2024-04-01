import mongoose, { Schema } from "mongoose";

const CategorySchema = mongoose.Schema(
    {
        name : {
            type : String,
            require : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const Category = mongoose.model("Category", CategorySchema)
export default Category