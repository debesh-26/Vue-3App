<template>
    <section id="case-studies"
        class="core-technologies-section flex flex-col items-center justify-center p-6 md:py-20 bg-white relative">
        <div class="absolute top-10 left-20 mt-4">
            <img src="/image3.svg" alt="Image 3" class="w-40 md:w-40 h-auto transform  md:scale-150 ">
        </div>
        <div class="relative flex flex-col items-center z-10 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Core Technologies</h2>
            <p class="text-gray-700 mb-6 max-w-xl">
                Lorem ipsum dolor sit amet, conse ctetur adipis cing elit. Ali quam ex odio, is the turpis accumsan
                congue
                euismod blandit dui Pellentesque habitant.
            </p>
            <div class="flex space-x-4 mb-8 p-4 bg-white rounded-full shadow-lg">
                <button :class="activeTab === 'design' ? 'bg-white text-blue-600' : ''" @click="setActiveTab('design')"
                    class="px-4 py-2 rounded-full focus:outline-none">
                    Design
                </button>
                <button :class="activeTab === 'development' ? 'bg-white text-blue-600' : ''"
                    @click="setActiveTab('development')" class="px-4 py-2 rounded-full focus:outline-none">
                    Development
                </button>
                <button :class="activeTab === 'marketing' ? 'bg-white text-blue-600' : ''"
                    @click="setActiveTab('marketing')" class="px-4 py-2 rounded-full focus:outline-none">
                    Marketing
                </button>
            </div>
            <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 ">
                <img v-for="(tech, index) in techIcons" :key="index" :src="`/${tech}`" alt="Technology Icon" 
                class="flex items-center justify-center bg-white rounded-lg border border-gray-200 shadow-md p-6 w-24 h-24" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CoreTechnologies',
    data() {
        return {
            activeTab: 'development',
            techIcons: [
                'React-icon.svg',
                'Amazon_Web_Services_Logo (1).svg',
                'Mask Group 1.svg',
                'redux-logo.svg',
                'Path 37520.svg',
                'g10.svg',
                'Mask Group 3.svg',
                '_Path_3.svg',
                'redux-logo.svg',
                'Amazon_Web_Services_Logo (1).svg',
                'g10.svg',
                'React-icon.svg'
            ]
        }
    },
    methods: {
        setActiveTab(tab) {
            this.activeTab = tab;
        }
    }
}
</script>

<style scoped>
.core-technologies-section {
    background-color: #FFFFFF;
    position: relative;
    overflow: hidden;
}

button {
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.grid > div {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid > div:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>