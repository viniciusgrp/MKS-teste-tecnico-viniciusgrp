import axios from "axios";

const Api = axios.create({
    baseURL: 'https://mks-frontend-challenge-api.herokuapp.com/api/v1',
    timeout: 5000,
});

export default Api