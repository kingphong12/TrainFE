import axiosClient from "./axiosClient";

const countryApi = {
  getAll: (params) => {
    const url = "/api/provinces"
    return axiosClient.get(url, { params })
  },

  getAllDistrict: (params) => {
    const url = "/api/districts"
    return axiosClient.get(url, { params })
  }
}

export default countryApi