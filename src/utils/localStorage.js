export class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    this.store[key] = undefined;
  }
};

export const setUserInfo = (token, email) => {
  localStorage.setItem('AuthUserToken', token);
  localStorage.setItem('AuthUserEmail', email);
};

export const removeUserInfo = () => {
  localStorage.removeItem('AuthUserToken');
  localStorage.removeItem('AuthUserEmail');
};

export const isAuthenticated = () => {
  return (
    localStorage.getItem('AuthUserToken') && localStorage.getItem('AuthUserEmail')
  );
}