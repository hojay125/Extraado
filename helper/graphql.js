import axios from 'axios';
const base_ql_url = 'https://api.extraado.com/graphql';
import {getData} from './storage';
export const handleQuery = async (fd, token = '', timer = true) => {
  const token2 = await getData('token');
  const parsedUser = JSON.parse(token2);
  console.warn('token>>', parsedUser);
  return new Promise((resolve, reject) => {
    axios
      .post(
        base_ql_url,
        {
          query: `${fd}`,
        },
        {
          headers: {
            Authorization: `Bearer ${parsedUser}`,
          },
        },
      )
      .then(res => {
        console.log('res,<<', res);
        return resolve(res.data);
      })
      .catch(error => {
        console.warn('error>>', error.response);
        let error_msg = {
          msg: 'Network Error! Please try again',
          code: 500,
        };
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.data &&
          error.response.data.data[0] &&
          error.response.data.data[0].messages &&
          error.response.data.data[0].messages[0]
        ) {
          error_msg = {
            msg: error.response.data.data[0].messages[0].message,
            code: error.response.status,
          };
        }
        return reject(error_msg);
      });
    if (timer) {
      setTimeout(() => {
        return reject({
          msg: 'Network Error! Please try again',
          code: 500,
        });
      }, 2000);
    }
  });
};

export const handleQuery2 = (fd, timer = true) => {
  return new Promise((resolve, reject) => {
    axios
      .post(base_ql_url, {
        query: `${fd}`,
      })
      .then(res => {
        console.log('res,<<', res);
        return resolve(res.data);
      })
      .catch(error => {
        console.warn('error>>', error.response);
        let error_msg = {
          msg: 'Network Error! Please try again',
          code: 500,
        };
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.data &&
          error.response.data.data[0] &&
          error.response.data.data[0].messages &&
          error.response.data.data[0].messages[0]
        ) {
          error_msg = {
            msg: error.response.data.data[0].messages[0].message,
            code: error.response.status,
          };
        }
        return reject(error_msg);
      });
    if (timer) {
      setTimeout(() => {
        return reject({
          msg: 'Network Error! Please try again',
          code: 500,
        });
      }, 50000);
    }
  });
};
