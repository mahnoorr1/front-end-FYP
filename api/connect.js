import axios from "axios";

export var Axios = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'token'}
  });