import axios from 'axios';

const api = axios.create({
  baseURL: 'https://unballoon-cses-ranking-back.danvic.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
