import axios from "axios";

const customAxios = axios.create({
    // baseURL: "http://localhost:4000",
    baseURL: "https://dj-indianjwelery-backend.onrender.com/",
});

export default customAxios;
