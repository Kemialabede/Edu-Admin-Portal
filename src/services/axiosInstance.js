import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_EDU_ADMIN_API_URL}/api/v1/`,
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
