import axios from "axios";

const axios = axios.create({
  baseUrl: "https://paybillsbackend.onrender.com/",
});

const token = localStorage.getItem("token");

axios.interceptors.request.use(
  function (config) {
    // check token existence and set authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
