import axios from "axios"
export const loginUser = async(data) => {
    try {
        const res = await axios.post("", data);
        return res.data;
    } catch (error) {
        console.error(error);
        throw new Error("Đã xảy ra lỗi khi đăng nhập");
    }
}