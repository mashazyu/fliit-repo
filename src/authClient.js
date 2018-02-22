// in src/authClient.js
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_CHECK,
  AUTH_ERROR
} from 'admin-on-rest';

import userCredentials from './logins';

export default (type, params) => {

    if (type === AUTH_LOGIN){
        const { username, password } = params;
        const user = userCredentials.find(user => user.username === username);
        if (user !== undefined) {
          if (user.password === password) {
            localStorage.setItem('username', username);
            return Promise.resolve();
          } else {
            return Promise.reject();
          }
        }
      return Promise.reject();
    }

    if (type === AUTH_CHECK) {
      return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    }

    if (type === AUTH_LOGOUT) {
      localStorage.removeItem('username');
      return Promise.resolve();
    }

    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }

    return Promise.reject();
};
