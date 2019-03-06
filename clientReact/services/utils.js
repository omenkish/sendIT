import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});

 export const sendHttpRequest = async (url, method, data) => {
    const response = await apiInstance({
      url,
      method,
      data,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  }