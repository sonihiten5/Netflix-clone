import axios from "axios";

//base URL here
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export default instance;