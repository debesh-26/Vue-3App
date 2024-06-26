import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './store';
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';
import DashboardPage from './components/DashboardPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  {
    path: '/dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
