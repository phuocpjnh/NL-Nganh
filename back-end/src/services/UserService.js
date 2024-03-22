const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const { genneralAccessToken, genneralRefreshToken } = require("./JwTService")
// const { genneralAccessToken, genneralRefreshToken } = require("./JwtService")

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser
        try {
            const checkUser = await User.findOne({
                email:email
            })
            if ( checkUser !== null) {
                resolve({
                    status: 'Thành Công',
                    message: ' Email Đã Được Sử Dụng'
                })
            }
            const hash = bcrypt.hashSync(password, 10)
            console.log('hash', hash)
            const createdUser = await User.create({
                name, 
                email, 
                password: hash, 
                phone 
            })
            if(createdUser) {
                resolve({
                    status: 'Thành Công',
                    message: 'Đã Tạo Người Dùng',
                    data: createdUser
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = userLogin
        try {
            const checkUser = await User.findOne({
                email:email
            })
            if ( checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'Người Dùng Không Tồn Tại'
                })
            }
            const comparePassword = bcrypt.compareSync(password, checkUser.password)
            console.log('comparePassword', comparePassword)
            if (!comparePassword) {
                resolve({
                    status: 'OK',
                    message: 'Người Dùng Hoặc Mật Khẩu Không Đúng'
                })
            }
            const access_token = await genneralAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })

            const refresh_token = await genneralRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })

           
                resolve({
                    status: 'OK',
                    message: 'Success',
                    access_token,
                    refresh_token
                })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createUser,
    loginUser
    
}