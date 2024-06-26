<template>
  <div class="login-page flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
    <div class="w-full md:w-1/2 p-5">
      <img src="/image2.svg" alt="Login Illustration" class="mx-auto w-full">
    </div>
    <div class="w-full md:w-1/2 p-5">
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-6">Login to Access Dashboard</h2>
        <form @submit.prevent="handleLogin" class="space-y-4 flex flex-col items-center">
          <div class="w-full">
            <label for="email" class="block mb-2">Email*</label>
            <input type="email" id="email" v-model="email" required class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600">
          </div>
          <div class="w-full">
            <label for="password" class="block mb-2">Password*</label>
            <input type="password" id="password" v-model="password" required class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600">
            <a href="#" class="text-sm text-red-500 float-right mt-1">Forget Password?</a>
          </div>
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-full mt-4">Login &raquo;</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../store';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      console.log('Logging in with:', this.email, this.password);
      const user = { email: this.email };
      const userStore = useUserStore();
      userStore.login(user);
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style scoped>
.login-page {
  background-color: #f3f4f6;
}
</style>
