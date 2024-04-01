import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        }
    },
    {
        timeseries: true,
        versionKey: false
    }
)

const Category = mongoose.model("Category", CategorySchema)

export default Category