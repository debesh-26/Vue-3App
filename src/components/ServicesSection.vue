<template>
  <section id="services"
    class="services-section min-h-screen flex flex-col md:flex-row items-center justify-center p-6 bg-white">
    <div class="w-full md:w-1/2 flex flex-col  text-left md:pl-20">
      <div class="max-w-md ml-12">
        <h2 class="text-3xl font-bold mb-4 text-blue-600 flex items-center">
          <span class="triangle"></span>
          OUR SERVICES
        </h2>
        <h3 class="text-2xl font-semibold mb-4">Transforming your ideas into Reality</h3>
        <div class="mb-4">
          <button v-for="service in services" :key="service.id" @click="selectService(service)"
            :class="['service-tag', { 'bg-blue-600 text-white': selectedService.id === service.id }]">
            {{ service.name }}
          </button>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 flex flex-col items-center justify-center p-6 relative ">
      <div class="bg-blue-600 bg absolute w-1/2 h-full right-0 "></div>
      <div class="bg-white shadow-lg p-6 rounded-lg max-w-md relative  flex flex-col items-start">
        <div class="flex items-start mb-4">
          <img :src="selectedService.icon" alt="Service Icon" class="w-12 h-12 mr-4" />
          <h3 class="text-2xl font-semibold">{{ selectedService.name }}</h3>
        </div>
        <p class="mb-4">{{ selectedService.description }}</p>
        <ul class="list-none p-0">
          <li v-for="(point, index) in selectedService.points" :key="index" class="flex items-center mb-2">
            <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          id: 1,
          name: 'Web Development',
          description: 'We build responsive and robust websites.Building website in new technology is challenging but we can learn a lot form it',
          icon: '/image5.svg',
          points: [
            'Responsive design',
            'SEO optimized',
            'E-commerce solutions',
            'Content management systems',
          ],
        },
        {
          id: 2,
          name: 'Mobile Development',
          description: 'Creating seamless mobile experiences.Building website in new technology is challenging but we can learn a lot form it',
          icon: '/image5.svg',
          points: [
            'iOS and Android',
            'Cross-platform apps',
            'User-friendly interfaces',
            'Performance optimized',
          ],
        },
        {
          id: 3,
          name: 'UI/UX Designing',
          description: 'Designing user-centric interfaces.Building website in new technology is challenging but we can learn a lot form it',
          icon: '/image5.svg',
          points: [
            'User research',
            'Wireframing and prototyping',
            'Visual design',
            'Usability testing',
          ],
        },
        {
          id: 4,
          name: 'Branding',
          description: 'Building memorable brand identities.Building website in new technology is challenging but we can learn a lot form it',
          icon: '/image5.svg',
          points: [
            'Brand strategy',
            'Logo design',
            'Brand guidelines',
            'Marketing materials',
          ],
        },
        {
          id: 5,
          name: 'Cloud Technology',
          description: 'Leverage the power of the cloud.Building website in new technology is challenging but we can learn a lot form it.',
          icon: '/image5.svg',
          points: [
            'Cloud migration',
            'Scalability solutions',
            'Cloud security',
            'Cost optimization',
          ],
        },
      ],
      selectedService: {},
    };
  },
  created() {
    this.selectedService = this.services[0];
  },
  methods: {
    selectService(service) {
      this.selectedService = service;
    },
    
  },
};
</script>

<style scoped>
.services-section {
  background-color: #f1f1f1;
}

.bg-blue-600 {
  background-color: #0E77FF;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid #0E77FF;
  margin-right: 10px;
  transform: matrix(0, 1, -1, 0, 0, 0);
}

.service-tag {
  display: inline-block;
  background-color: #e0e7ff;
  color: #1d4ed8;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0.5rem 0;
  cursor: pointer;
}

.bg-blue-600 {
  background-color: #2563eb;
  color: white;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.right-0 {
  right: 0;
}

.z-0 {
  z-index: 0;
}

.z-10 {
  z-index: 10;
}

.text-green-500 {
  color: #10b981;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.list-none {
  list-style: none;
  padding: 0;
}

.w-12 {
  width: 3rem;
}

.h-12 {
  height: 3rem;
}

.mr-4 {
  margin-right: 1rem;
}
</style>
