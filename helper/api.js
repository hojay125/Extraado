import axios from 'axios';
import {endPoint} from './baseUrl';
import {getData} from './storage';

export const axiosCalls = async (path, method, data = null) => {
  const userToken = await getData('user');
  console.warn('userToken?>>>>', userToken);

  const token = await getData('token');
  const parsedUser = JSON.parse(token);
  console.warn('userData', `Bearer ${parsedUser}`);

  try {
    console.warn('path', path, method);
    console.warn('path>>>>>>>', `${endPoint}${path}`);
    let res = await axios({
      method: method,
      url: `${endPoint}${path}`,
      data: data,
      headers: {Authorization: `Bearer ${parsedUser}`},
    });
    if (res) {
      return res;
    }
  } catch (err) {
    console.warn('call err', err.response.data);

    return {er: err.response.data};
  }
};

export const axiosCallsNoAuth = async (path, method, data = null) => {
  try {
    console.warn('path22', `${path}`);

    console.warn('path>>>>>>>', `https://api.extraado.com/${path}`);
    let res = await axios({
      method: method,
      url: `https://api.extraado.com/${path}`,
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'X-Forwarded-For': '18.135.125.68',
      },
    });
    if (res) {
      console.warn('yes', res);
      return res;
    }
  } catch (err) {
    console.warn('call err1', err);
    //console.warn('call err2', err.response.data);

    return {er: err.response.data};
  }
};
