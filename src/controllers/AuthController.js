import User from "../models/User"
import validateAuth from "../validations/auth"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const AuthController = {
    register: async (req, res) => {
        try {
            const { error } = validateAuth.register.validate(req.body, { abortEarly: false })
            if (error) {
                const errors = error.details.map(e => e.message)
                return res.status(400).json({
                    error: errors
                })
            }

            // check email 
            const checkEmail = await User.findOne({
                email : req.body.email
            })

            if(checkEmail) return res.status(400).json({
                message : "email này đã tồn tại"
            })
            // hash 
            const hashPW = await bcrypt.hash(req.body.password, 10)

            const newUser = await User.create({
                ...req.body,
                password : hashPW
            })

            newUser.password = undefined

            return res.status(201).json({
                message: "Tạo thành công ",
                newUser: newUser
            })
        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            })
        }
    },
    login : async (req, res) => {
        try {
            const { error } = validateAuth.login.validate(req.body, { abortEarly: false })
            if (error) {
                const errors = error.details.map(e => e.message)
                return res.status(400).json({
                    error: errors
                })
            }

             // check email 
             const checkEmail = await User.findOne({
                email : req.body.email
            })

            if(!checkEmail) return res.status(400).json({
                message : "email này không tồn tại"
            })

            const comparePw = await bcrypt.compare(req.body.password, checkEmail.password)

            if(!comparePw) return res.status(400).json({
                message : "mật khẩu không trùng khớp "
            }) 

            checkEmail.password = undefined

            const token = await jwt.sign({ user : checkEmail }, "hihihi")

            return res.status(200).json({
                message : 'thành công',
                token : token,
                user : checkEmail
            })

           
            
        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            })
        }
    }
}

export default AuthController