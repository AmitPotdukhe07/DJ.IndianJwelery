import axios from "axios";

const customAxios = axios.create({
    baseURL: "http://localhost:4000",
    // baseURL: "https://vms-backend-xu8l.onrender.com",
});

export default customAxios;
