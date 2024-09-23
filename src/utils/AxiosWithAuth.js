import axios from "axios";

export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:8080/AppFellas/api/v1/",
    headers: token ? { authorization: `Bearer ${token}` } : {},
  });
};

export const renewAPI = (token) => {
  token && localStorage.setItem("token", token);

  AxiosWithAuth();
};

renewAPI(localStorage.getItem("token"));