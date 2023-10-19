import axios from "axios"

export const axiosInstance = axios.create({
	baseURL : "https://mernblogapi-ym6g.onrender.com/api/"
})