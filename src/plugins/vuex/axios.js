import axios from "axios";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = "https://taskapi.sarvarjon.uz/api";
export default axios;