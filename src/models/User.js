import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true,
            min: 6,
            max: 20
        },
        role: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = mongoose.model("User", UserSchema)
export default User