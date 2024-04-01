import Joi from "joi"

const validateAuth = {
    register : Joi.object({
        userName: Joi.string().required().messages({
            'string.empty': 'Vui lòng nhập tên người dùng',
            'any.required': 'Vui lòng nhập tên người dùng'
        }),
        email: Joi.string().required().email().messages({
            'string.empty': 'Vui lòng nhập email',
            'any.required': 'Vui lòng nhập email',
            'string.email': 'Email không hợp lệ'
        }),
        password: Joi.string().required().min(6).max(20).messages({
            'string.empty': 'Vui lòng nhập mật khẩu',
            'any.required': 'Vui lòng nhập mật khẩu',
            'string.min': 'Mật khẩu phải chứa ít nhất 6 ký tự',
            'string.max': 'Mật khẩu không được vượt quá 20 ký tự'
        })
    }),
    login : Joi.object({
        email: Joi.string().required().email().messages({
            'string.empty': 'Vui lòng nhập email',
            'any.required': 'Vui lòng nhập email',
            'string.email': 'Email không hợp lệ'
        }),
        password: Joi.string().required().messages({
            'string.empty': 'Vui lòng nhập mật khẩu',
            'any.required': 'Vui lòng nhập mật khẩu'
        })
    })
}

export default validateAuth