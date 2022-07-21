import axios from "axios";

const api = axios.create({
    baseURL: "https://stripe-api-node.herokuapp.com/"
});


export default api;