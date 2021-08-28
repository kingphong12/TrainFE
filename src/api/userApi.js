// const baseURL = "http://api.oceantech.vn/training/api/employees"
import axiosClient from "./axiosClient"

const userApi = {
  getAll: (params) => {
    const url = "/api/employees"
    return axiosClient.get(url, { params })
  },

  postUser: (params) => {
    const url = "/api/employee"

    return axiosClient.post(url, { params })
  },

  deleteUserId: (params) => {
    const url = "/api/employee"
    return axiosClient.delete(url, { params })
  }
}

export default userApi