const UserService = require('../services/UserService')

const createUser = async (req, res) => {
    try {
        
        const {name, email, password, confirmPassword, phone} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The input is required'
            })
        }  else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The input is email'
            })
        } else if (password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The password is equal confirmPassword'
            })
        } 
        const response = await UserService.createUser(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e,
            
        })
    }
}

const loginUser = async (req, res) => {
    try {
        
        const {name, email, password, confirmPassword, phone} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Cần Phải Nhập'
            })
        }  else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Hãy Nhập Email'
            })
        } else if (password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Vui Lòng Nhập Lại Mật Khẩu'
            })
        } 
        const response = await UserService.loginUser(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e,
            
        })
    }
}

module.exports = {
    createUser,
    loginUser
}