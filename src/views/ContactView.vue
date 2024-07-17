
<script setup>
import NavBar from '../components/NavBar.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import CategoryComponent from '../components/CategoryComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'
import HomeCoursesComponent from '../components/HomeCoursesComponent.vue'
import SubscribeComponent from "../components/SubscribeComponent.vue" ;
import FooterComponent from "../components/FooterComponent.vue" ;
// import LoginComponent from '../components/LoginComponent'
import { onMounted, ref } from "vue";
import { useAuthStore, useContact } from "../stores/counter"
import { useRouter } from "vue-router";



const form = ref({
    name: "",
    email: "",
    message: "",
});

const message = ref(null);

const router = useRouter();
const authStore = useAuthStore();
const contactStore = useContact();

const sendMail = async () => {
    await contactStore.sendMail(form.value)
    message.value =  contactStore.message;
}


onMounted(async () => {
  await authStore.getUser();
});
</script>


<template>
    <link rel="stylesheet" href="assets/css/style2.css">

    <NavBar />

    
        <!--  Page Title Area Start-->
        <section class="page-title-area position-relative">
        <div class="container">
            <div class="main-max-width">
                <div class="page-title-content">
                    <h2>Contact</h2>
                    <ul class="page-breadcrumb align-items-center list-unstyle">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item"></li>
                        <li class="primery-link">Contact</li>
                    </ul>
                    <div class="shape-1 moveHorizontal">
                        <img src="../../assets/img/icon/shape-2.svg" alt="image">
                    </div>
                    <div class="shape-2">
                        <img src="../../assets/img/icon/section-icon-1.svg" alt="image">
                    </div>
                    <div class="shape-3 bounce">
                        <img src="../../assets/img/icon/section-icon-2.svg" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--  Page Title Area End-->

    <!-- Contact Area Start -->
    <div class="contact-section">
        <div class="container">
            <div class="main-max-width">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="content">
                            <h2 class="fs-35 mb-30 gradient-style">Get In Touch</h2>
                            <p>Whether you have questions about our services, want to explore potential collaboration opportunities,</p>

                            <div class="contact-form">
                                <form @submit.prevent="sendMail">
                                    <div class="form-group mb-15">
                                        <label class="label-style">Your name</label>
                                        <input type="name" v-model="form.name" placeholder="Your name" name="name" class="bg-white input-style border-style w-100 h-60">
                                    </div>
                                    <div class="form-group mb-15">
                                        <label class="label-style">Your email</label>
                                        <input type="email" v-model="form.email" placeholder="Your email" name="email" class="bg-white input-style border-style w-100 h-60">
                                    </div>
                                    <div class="form-group mb-15">
                                        <label class="label-style">Message</label>
                                        <textarea name="message" v-model="form.message" id="msg" cols="30" rows="5" class="bg-white input-style border-style w-100" placeholder="Your comments here"></textarea>
                                    </div>
                                    <button type="submit" class="btn style-one box-shadow-1" >Send Message</button>
                                </form>
                                <div class="alert alert-primary alert-dismissible fade show mt-3" role="alert" v-if="message">
                                 {{ contactStore.message }}
                                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-info">
                            <h4 class="fs-20 text-title">Contact Us</h4>

                            <div class="content mb-40">
                                <div class="info-item d-flex align-items-center">
                                    <div class="icon">
                                        <img src="/assets/img/icon/location-icon-cont.svg" alt="icon">
                                    </div>
                                    <div class="text">
                                        <h5 class="fs-16">Address</h5>
                                        <p class="mb-0">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                                    </div>
                                </div>
                                <div class="info-item d-flex align-items-center">
                                    <div class="icon">
                                        <img src="/assets/img/icon/mail-icon-cont.svg" alt="icon">
                                    </div>
                                    <div class="text">
                                        <h5 class="fs-16">Email</h5>
                                        <a href="mailto:Info123456@gmail.com">Info123456@gmail.com</a>
                                    </div>
                                </div>
                                <div class="info-item d-flex align-items-center">
                                    <div class="icon">
                                        <img src="/assets/img/icon/phone-icon-cont.svg" alt="icon">
                                    </div>
                                    <div class="text">
                                        <h5 class="fs-16">Phone</h5>
                                        <a href="tel:123456789">+123 456 789</a>
                                    </div>
                                </div>
                            </div>

                            <div class="social-profile d-flex align-items-center">
                                <span class="fs-16">Follow Us:</span>
                                <ul class="list-unstyle d-flex">
                                    <li><a href="https://www.fb.com" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                                    <li><a href="https://www.twitter.com" target="_blank"><i class="ri-twitter-x-fill"></i></a></li>
                                    <li><a href="https://www.instagram.com" target="_blank"><i class="ri-instagram-line"></i></a></li>
                                    <li><a href="https://www.linkedin.com" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="map-loc pb-100">
        <div class="container-fluid g-0">
            <div class="office-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd">
                    </iframe>
            </div>
        </div>
    </div>
    <!-- Contact Area End -->





    <!-- Back to Top -->
    <button type="button" id="backtotop" class="position-fixed text-center border-0 p-0">
            <i class="ri-arrow-up-s-line"></i>
        </button>
    
    
    
    
    <FooterComponent />

</template>