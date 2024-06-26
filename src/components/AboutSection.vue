<template>
    <section id="about"
        class="about-section min-h-screen flex flex-col md:flex-row items-center justify-center p-6 bg-white relative">
        <div class="w-full md:w-1/2 relative pl-10 md:pl-20 left-[-300px] md:left-[-99px]">
            <img src="/image2.svg" alt="About Image" class="w-full h-auto relative left-[+2px] md:left-[-40px]">
        </div>

        <div class="w-full md:w-1/2 flex flex-col items-center text-center md:text-left md:pl-20">
            <div class="max-w-md">
                <h2 class="text-3xl font-bold mb-4 text-blue-600 flex items-center">
                    <span class="triangle"></span>
                    ABOUT US
                </h2>
                <h3 class="text-2xl font-semibold mb-4">Great Digital Agency</h3>
                <p class="mb-4">
                    Our products are fully custom-made, built with the latest technologies and cloud-architectures.
                </p>
                <p class="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue.
                    Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas.
                    In convallis porta mauris non aliquam.
                </p>
                <button @click="navigateToLogin" class="border-2 border-blue-500 px-6 py-3 rounded-full mt-4 text-blue-600">Get Started
                    »</button>
            </div>
        </div>

        <div class="absolute top-0 right-0 mt-4">
            <img src="/image3.svg" alt="Image 3" class="l;w-20 md:w-40 h-auto size-3">
        </div>
        <div class="absolute bottom-0 right-0 mb-4">
            <img src="/image4.svg" alt="Image 4" class="w-24 md:w-32 h-auto">
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutSection',
    methods: {
        navigateToLogin() {
            this.$router.push('/login');
        },
    }
};
</script>

<style scoped>
.about-section {
    background-color: #ffff;
}

.triangle {
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #0E77FF;
    margin-right: 10px;
    transform: matrix(0, 1, -1, 0, 0, 0);
    background: #0E77FF 0% 0% no-repeat padding-box;

}
</style>