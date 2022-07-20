import axios from "axios";

const api = axios.create({
    baseURL: "https://paypal-api-payments.herokuapp.com"
});


export default api;