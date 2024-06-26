<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-gray-100">
    <aside
      :class="['w-30 md:w-64 h-auto bg-white shadow-md fixed md:relative transition-transform duration-300', { '-translate-x-full': !isSidebarOpen && !isLargeScreen, 'translate-x-0': isSidebarOpen || isLargeScreen }]">
      <div class="p-4 flex flex-col justify-between items-center">
        <div>
          <div class="mb-4">
            <a href="#" class="flex items-center p-2 text-gray-700 rounded-md flex-col shadow-md">
              <img src="metrics.svg" alt="" class="image hover:scale-75" />
              <span>Dashboard</span>
            </a>
          </div>
          <div class="mb-4">
            <a href="#" class="flex items-center p-2 text-gray-700 rounded-md flex-col shadow-md">
              <img src="analytics.svg" alt="" class="image hover:scale-75" />
              <span>Analytics</span>
            </a>
          </div>
          <div class="mb-4">
            <a href="#" class="flex items-center p-2 text-gray-700 rounded-md flex-col shadow-md">
              <img src="currency-exchange-2.svg" alt="" class="image hover:scale-75" />
              <span>Trading</span>
            </a>
          </div>
          <div class="mb-4">
            <a href="#" class="flex items-center p-2 text-gray-700 rounded-md flex-col shadow-md">
              <img src="sound-wave.svg" alt="" class="image hover:scale-75" />
              <span>Notification</span>
            </a>
          </div>
        </div>
        <div class="mb-4 flex-col absolute bottom-0 ">
          <button @click="handleLogout" class="flex items-center p-2 text-gray-700 rounded-md flex-col shadow-md">
            <img src="logout.svg" alt="" class="image hover:scale-75" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>

    <div class="flex-1 p-6 ml-auto md:ml-0">
      <header class="flex flex-col md:flex-row items-center justify-between mb-8">
        <div class="flex items-center justify-between w-full md:w-auto">
          <h1 class="text-2xl font-bold">Dashboard</h1>
          <button @click="toggleSidebar" class="md:hidden p-2">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
        <div class="mt-4 md:mt-0 flex items-center gap-y-0.5">
          <button class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
            <i class="pi pi-plus mr-2"></i>
            Add Unit
          </button>
          <img src="/person2.png" alt="Profile" class="w-10 h-10 rounded-full shadow-xl ">
          <span class="ml-4 font-semibold text-lg">Andrew Johnston</span>
        </div>
      </header>

      <main>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="p-6 bg-white shadow-md rounded-md">
            <h2 class="text-gray-700 font-semibold mb-2">Balance</h2>
            <p class="text-2xl font-bold">$5900.00</p>
          </div>
          <div class="p-6 bg-white shadow-md rounded-md">
            <h2 class="text-gray-700 font-semibold mb-2">Profits</h2>
            <p class="text-2xl font-bold">$950.00 <span class="text-green-500">+56%</span></p>
          </div>
          <div class="p-6 bg-white shadow-md rounded-md">
            <h2 class="text-gray-700 font-semibold mb-2">Losses</h2>
            <p class="text-2xl font-bold">$450.00 <span class="text-red-500">+56%</span></p>
          </div>
          <div class="p-6 bg-white shadow-md rounded-md">
            <h2 class="text-gray-700 font-semibold mb-2">Currencies</h2>
            <div class="currencies flex gap-x-5">
              <img src="/bitcoin-2.svg" alt="">
              <img src="/currency-dollar.svg" alt="">
              <img src="/currency-euro.svg" alt="">
              <img src="/currency-yen.svg" alt="">
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="p-6 bg-white shadow-md rounded-md">
            <h2 class="text-gray-700 font-semibold mb-2">Italy</h2>
            <p class="text-2xl font-bold">475 <i class="text-green-500">↑</i></p>
          </div>
          <div class="p-6 bg-white shadow-md rounded-md">
            <h2 class="text-gray-700 font-semibold mb-2">United States</h2>
            <p class="text-2xl font-bold">431 <span class="text-green-500">↑</span></p>
          </div>
          <div class="p-6 bg-white shadow-md rounded-md">
            <h2 class="text-gray-700 font-semibold mb-2">Canada</h2>
            <p class="text-2xl font-bold">174 <span class="text-red-500">↓</span></p>
          </div>
          <div class="p-6 bg-white shadow-md rounded-md">
            <h2 class="text-gray-700 font-semibold mb-2">Canada</h2>
            <p class="text-2xl font-bold">174 <span class="text-red-500">↓</span></p>
          </div>
        </div>

        <h1 class="text-xl font-semibold mb-4">Team Members</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white shadow-md rounded-md p-6 relative">
            <ul>
              <li class="flex items-center mb-4">
                <img src="/person2.png" alt="Profile" class="w-10 h-10 rounded-full shadow-xl ">
                <div class="ml-4 flex items-center justify-between w-full">
                  <p class="font-semibold">Andrew Johnston</p>
                  <p class="text-blue-500 bg-blue-200 rounded-lg p-1">Top Trader</p>
                </div>
              </li>
              <li class="flex items-center mb-4">
                <img src="/person2.png" alt="Profile" class="w-10 h-10 rounded-full shadow-xl ">
                <div class="ml-4 flex items-center justify-between w-full">
                  <p class="font-semibold">Anna Atkinsons</p>
                  <p class="text-blue-500 bg-blue-200 rounded-lg p-1">Manager</p>
                </div>
              </li>
              <li class="flex items-center mb-4">
                <img src="/person2.png" alt="Profile" class="w-10 h-10 rounded-full shadow-xl ">
                <div class="ml-4 flex items-center justify-between w-full">
                  <p class="font-semibold">Mark Atkinsons</p>
                  <p class="text-blue-500 bg-blue-200 rounded-lg p-1">Top Trader</p>
                </div>
              </li>
              <li class="flex items-center mb-4">
                <img src="/person2.png" alt="Profile" class="w-10 h-10 rounded-full shadow-xl ">
                <div class="ml-4 flex items-center justify-between w-full">
                  <p class="font-semibold">Johanna Tairons</p>
                  <p class="text-blue-500 bg-blue-200 rounded-lg p-1">Manager</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="bg-white shadow-md rounded-md p-6">
            <h1 class="text-xl font-semibold mb-4">Comparison</h1>
            <div>
              <div class="mb-4">
                <div class="flex items-center gap-2">
                  <img src="usa.svg" alt="" class="mb-2">
                  <p class="font-semibold">United States</p>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-500 h-2 rounded-full" style="width: 93%"></div>
                </div>
              </div>
              <div class="mb-4">
                <div class="flex items-center gap-2">
                  <img src="italy.svg" alt="" class="mb-2">
                  <p class="font-semibold">Italy</p>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-500 h-2 rounded-full" style="width: 73%"></div>
                </div>
              </div>
              <div class="mb-4">
                <div class="flex items-center gap-2">
                  <img src="spain.svg" alt="" class="mb-2">
                  <p class="font-semibold">Spain</p>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-red-500 h-2 rounded-full" style="width: 13%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../store';

export default {
  name: 'DashboardPage',
  data() {
    return {
      isSidebarOpen: false,
      isLargeScreen: window.innerWidth >= 768,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    handleLogout() {
      const userStore = useUserStore();
      userStore.logout();
      this.$router.push('/');
    },
    updateScreenSize() {
      this.isLargeScreen = window.innerWidth >= 769;
      if (this.isLargeScreen) {
        this.isSidebarOpen = false;
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateScreenSize);
    this.updateScreenSize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateScreenSize);
  },
};
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';

.image {
  width: 43px;
  height: 43px;
}

aside {
  @apply transform transition-transform duration-300;
}

@media (max-width: 767px) {
  aside {
    @apply fixed top-0 left-0 h-full -translate-x-full;
  }

  .translate-x-0 {
    transform: translateX(0);
  }
}
</style>
