import mongoose, { Schema } from "mongoose";
import Category from "./Category.js";

const ProductSchema = new mongoose.Schema(
    {
        name : {
            type : String ,
            require : true,
         

        },
        age : {
            type : Number ,
            require : true,
            min : 6,
            max : 100,
            default : 100

        },
        price : {
            type : Number,
            require : true
        },
        desc : {
            type : String ,
            require : true
        },
        image : {
            type : String,
            require : true
        },
        category_id : {
            type : Schema.Types.ObjectId,
            ref : "Category"
        }
        
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const Product = mongoose.model("Products", ProductSchema)
export default Product
