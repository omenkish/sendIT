const logout = (e) => {
  localStorage.removeItem('token');
  localStorage.removeItem('admin');
  localStorage.removeItem('username');
  window.location.replace('index.html');
};