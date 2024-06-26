<template>
    <div class="contact-form-footer  text-white" id="contact">
        <div class="flex flex-col md:flex-row items-center justify-around p-10">
            <div class="flex-1 p-5">
                <img src="/Group 35686.svg" alt="Illustration" class="mx-auto md:mx-0 w-3/4 md:w-full">
            </div>
            <div class="flex-1 p-5">
                <div class="bg-white text-black p-8 rounded-lg shadow-lg">
                    <h2 class="text-xl font-bold mb-6">Send Us a Message</h2>
                    <form  action="https://formsubmit.co/dmohapatra291@gmail.com"
                        method="POST" class="space-y-4">
                        <div>
                            <label for="email" class="block mb-2">Your Email*</label>
                            <input type="email" id="email" name="email" v-model="form.email" required
                                class="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-600">
                        </div>
                        <div>
                            <label for="name" class="block mb-2">Your Name*</label>
                            <input type="text" id="name" name="name" v-model="form.name" required
                                class="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-600">
                        </div>
                        <div>
                            <label for="phone" class="block mb-2">Phone Number*</label>
                            <input type="text" id="phone" name="phone" v-model="form.phone" required
                                class="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-600">
                        </div>
                        <div>
                            <label for="subject" class="block mb-2">Subject</label>
                            <input type="text" id="subject" name="subject" v-model="form.subject"
                                class="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-600">
                        </div>
                        <div>
                            <label for="message" class="block mb-2">Your Message</label>
                            <textarea id="message" name="message" v-model="form.message" rows="4"
                                class="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-600"></textarea>
                        </div>
                        <div>
                            <input type="checkbox" id="privacy" required class="mr-2">
                            <label for="privacy" class="text-sm">By sending this message, you confirm that you have read
                                and agreed to our privacy policy.</label>
                        </div>
                        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-full">Get Started
                            &raquo;</button>
                    </form>
                </div>
            </div>
        </div>

        <footer class="bg-blue-600 text-white py-10">
            <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div class="flex-1 mb-6 md:mb-0 text-center md:text-left">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div class="flex justify-center md:justify-start space-x-4 mt-4">
                        <a href="#"><i class="pi pi-facebook"></i></a>
                        <a href="#"><i class="pi pi-twitter"></i></a>
                        <a href="#"><i class="pi pi-instagram"></i></a>
                    </div>
                </div>
                <div class="flex-1 mb-6 md:mb-0 text-center md:text-left ml-10">
                    <h4 class="font-bold mb-2 underline decoration-2">Our Services</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:underline">Web Development</a></li>
                        <li><a href="#" class="hover:underline">Mobile Development</a></li>
                        <li><a href="#" class="hover:underline">Cloud Technologies</a></li>
                        <li><a href="#" class="hover:underline">UI/UX Designs</a></li>
                    </ul>
                </div>
                <div class="flex-1 mb-6 md:mb-0 text-center md:text-left">
                    <h4 class="font-bold mb-2 underline decoration-2">Our Links</h4>
                    <ul class="space-y-2">
                        <div>Terms & Conditions></div>
                        <li><a href="#" class="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" class="hover:underline">Imprint</a></li>
                        <li><a href="#" class="hover:underline">Legal</a></li>
                    </ul>
                </div>
                <div class="flex-1 mb-6 md:mb-0 text-center md:text-left space-y-2">
                    <h4 class="font-bold mb-2 underline decoration-2">Contact Us</h4>
                    <div class="icon">
                        <i class="pi pi-map-marker"></i>
                        <p>Al. Dummyroad 124/23 floor 123</p>

                    </div>
                    <p class="p">Banswara Street, 02-577 India</p>
                    <div class="icon">
                        <i class="pi pi-phone"></i>
                        <p>00 1800 245 453</p>
                    </div>
                    <div class="icon">
                        <i class="pi pi-envelope"></i>
                        <p>hello@inkyy.com</p>
                    </div>


                </div>
            </div>
        </footer>
    </div>
</template>

<script>

import 'primeicons/primeicons.css'

export default {
    name: 'ContactFormFooter',
    data() {
        return {
            form: {
                email: '',
                name: '',
                phone: '',
                subject: '',
                message: ''
            }
        };
    },
};

</script>

<style scoped>
.icon {
    display: flex;
    align-items: center;
}

.icon,
i {
    margin-right: 12px;
}

.p {
    margin-left: 28px;
}

.bg-blue-600 {
    background-color: #0E77FF;
}

footer {
    background-color: #0E77FF;
    height: auto;
}
</style>