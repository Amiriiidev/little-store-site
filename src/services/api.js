import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiServices = {
  getAll: (resource) => api.get(`/${resource}`),
  getOne: (resource, id) => api.get(`/${resource}/${id}`),
  create: (resource, data) => api.post(`/${resource}`, data),
  update: (resource, id, data) => api.put(`/${resource}/${id}`, data),
  delete: (resource, id) => api.delete(`/${resource}/${id}`),
};
