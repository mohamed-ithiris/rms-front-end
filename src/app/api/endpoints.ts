// lib/api/endpoints.js
export const API_BASE_URL = process.env.API_ENDPOINT || "http://localhost:3000";

export const endpoints = {
  getEmployees: `${API_BASE_URL}/employees`,
  getEmployee: (id: any) => `${API_BASE_URL}/employees/${id}`,
  // Add more endpoints as needed
};
