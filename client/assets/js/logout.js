const logout = (e) => {
  localStorage.removeItem('token');
  window.location.replace('index.html');
};