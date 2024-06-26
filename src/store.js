import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true;
      this.user = user;
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    },
  },
});
