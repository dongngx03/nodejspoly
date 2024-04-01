import jwt from "jsonwebtoken";

const CheckPermision = {
    member: async (req, res, next) => {
        try {
            const token = req.headers.token?.split(' ')[1];
            if (!token) return res.status(404).json({ message: "you don't have token" })
            next()
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    },
    admin: async (req, res, next) => {
        try {
            const token = req.headers.token?.split(' ')[1];
            if (!token) return res.status(404).json({ message: "you don't have token" })

            const infor = jwt.verify(token, "hihihi");
            console.log(infor);
            if (!infor.user.role) {
                return res.status(403).json({
                    message: " you 're not admin"
                })
            }

            next()
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }
}

export default CheckPermision