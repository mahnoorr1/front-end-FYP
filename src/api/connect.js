import axios from "axios";

export var Axios = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {'Content-Type':"application/json"}
  });