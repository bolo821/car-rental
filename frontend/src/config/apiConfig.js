import axios from 'axios';

let apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api`;

const api = axios.create({
    baseURL: apiUrl,
    headers: {
      'Content-Type': 'application/json'
    }
});

export default api;