import axios from 'axios';

const api = axios.create({
  baseURL: 'https://unballoon-cses-ranking-back.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
