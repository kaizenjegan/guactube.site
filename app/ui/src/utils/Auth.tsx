export const Auth = {
  getAuth: () => {
    let token = localStorage.getItem('token');
    return token || undefined;
  },
  setAuth: (token: string) => {
    localStorage.setItem('token', token);
  },
  logout: () => {
    console.log('logging out');
    localStorage.clear();
  },
  isLoggedIn: () => {
    return !!localStorage.getItem('token');
  }
}