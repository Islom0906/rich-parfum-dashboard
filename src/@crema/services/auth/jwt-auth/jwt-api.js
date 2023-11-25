import axios from 'axios';

const jwtAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/`, //YOUR_API_URL HERE
});



export const setAuthToken = (token) => {
  if (token) {
    jwtAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('richtoken', token);
  } else {
    delete jwtAxios.defaults.headers.common['authorization'];
    localStorage.removeItem('token');
  }
};

export default jwtAxios;
