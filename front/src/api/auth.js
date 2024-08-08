export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '111111') {
        resolve({ success: true, token: 'mock-token' });
      } else {
        reject({ success: false, message: 'Invalid credentials' });
      }
    }, 1000);
  });
};