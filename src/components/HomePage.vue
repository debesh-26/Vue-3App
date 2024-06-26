<template>
  <div class="bg-blue-600 text-white min-h-screen flex flex-col relative overflow-hidden">
    <nav class="w-full flex justify-around items-center p-6 " style="z-index:100;">
      <div class="text-3xl font-bold">Logo</div>
      <div class="hidden flex  md:flex md:items-center space-x-4" style="z-index:100;">
        <a href="#about" class="hover:underline">About</a>
        <a href="#services" class="hover:underline">Services</a>
        <a href="#case-studies" class="hover:underline">Case Studies</a>
        <a href="#contact" class="hover:underline">Testimonials</a>
        <a href="#contact" class="hover:underline">Contact</a>
        <button @click="navigateToLogin" class="bg-white text-blue-600 px-4 py-2">Login</button>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>

    <div v-if="menuOpen" class="md:hidden flex flex-col space-y-4 items-center p-6 z-20">
      <a href="#about" class="hover:underline">About</a>
      <a href="#services" class="hover:underline">Services</a>
      <a href="#case-studies" class="hover:underline">Case Studies</a>
      <a href="#testimonials" class="hover:underline">Testimonials</a>
      <a href="#contact" class="hover:underline">Contact</a>
      <button @click="navigateToLogin" class="bg-white text-blue-600 px-4 py-2">Login</button>
    </div>

    <div class="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center" style="background-image: url('/image1.svg'); background-size: cover;
  z-index: 0;"></div>

    <div class="relative flex-1 flex flex-col items-start justify-center p-6 md:pl-20 md:pt-20 z-10 text-left">
      <h1 class="text-4xl md:text-5xl  font-bold max-w-lg ">
        Lorem Ipsum is simply dummy text of the printing and typesetting.
      </h1>
      <p class="mt-4 max-w-md ">
        Our products are fully custom-made, built with the latest technologies and cloud-architectures.
      </p>
      <button  @click="navigateToLogin" class="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full">Get Started &raquo;</button>
    </div>

  </div>
  <AboutSection />
  <ServicesSection />
  <CoreTechnologies />
  <ContactFormFooter />
</template>

<script>
import AboutSection from './AboutSection.vue';
import ServicesSection from './ServicesSection.vue';
import CoreTechnologies from './CoreTechnologies.vue';
import ContactFormFooter from './ContactFormFooter.vue';

export default {
  name: 'HomePage',
  components: {
    AboutSection,
    ServicesSection,
    CoreTechnologies,
    ContactFormFooter,
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    scrollTo(section) {
      this.$scrollTo(section, 800);
    },
    navigateToLogin() {
      this.$router.push('/login');
    },
  }
}
</script>