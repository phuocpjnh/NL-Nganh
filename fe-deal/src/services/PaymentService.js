import axios from "axios"

export const getConfig = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL||'http://localhost:3011/api'}/payment/config`)
  return res.data
}