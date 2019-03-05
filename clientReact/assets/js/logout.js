const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('admin');
  localStorage.removeItem('username');
  localStorage.removeItem('userId');
  window.location.replace('index.html');
};