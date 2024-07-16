<script setup>
import NavBar from '../components/NavBar.vue'
import FooterComponent from "../components/FooterComponent.vue"
import { onMounted, ref } from "vue";
import { useAuthStore, useCart, useFomations, useInscriptions } from "../stores/counter"
import { useRoute, useRouter } from "vue-router";




const message = ref(null);
const cart = ref([]);
const route = useRoute();

const authStore = useAuthStore();


onMounted(async() => {
    try {
        
        await authStore.getUser();


        
        
        
        
        message.value = route.query;
        if (message.value.message) {
            const local = JSON.parse(localStorage.getItem('cart'));
            console.log(local);
            cart.value = local.filter(item => item.user_id !== authStore.user.id);
            localStorage.setItem('cart',JSON.stringify(cart.value));
            console.log(cart.value);
        }

        
    } catch (error) {
        console.error('Error during setup:', error);
    }
        
});

</script>

<template>
    <link rel="stylesheet" href="../assets/success.css">

    <NavBar />

    <!--  Page Title Area Start-->
    <section class="page-title-area position-relative">
        <div class="container">
            <div class="main-max-width">
                <div class="page-title-content">
                    <h2>Success</h2>
                    <ul class="page-breadcrumb align-items-center list-unstyle">
                        <li class="breadcrumb-item"><router-link to='/'>Home</router-link></li>
                        <li class="breadcrumb-item"></li>
                        <li class="primery-link">Success</li>
                    </ul>
                    <div class="shape-1 moveHorizontal">
                        <img src="../assets/img/icon/shape-2.svg" alt="image">
                    </div>
                    <div class="shape-2">
                        <img src="../assets/img/icon/section-icon-1.svg" alt="image">
                    </div>
                    <div class="shape-3 bounce">
                        <img src="../assets/img/icon/section-icon-2.svg" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--  Page Title Area End-->

    <!--  Success Section Start-->
    <div class="success-section ptb-100">
        <div class="container">
            <div class="main-max-width">
                <div class="success-content text-center">
                    <img class="mb-50" src="../../assets/img/all-img/sucess.png" alt="Image">
                    <h2 class="fs-35 mb-20">Payment Successfully</h2>
                    <p class="mb-30">Your payment of was successfully completed</p>
                    <router-link to="/" class="btn style-one box-shadow-1"><img src="../../assets/img/icon/long-arrow-left.svg" alt="icon"> Go To Home</router-link>
                </div>
            </div>
        </div>
    </div>
    <!--  Success Section End-->

    <!-- Back to Top -->
    <button type="button" id="backtotop" class="position-fixed text-center border-0 p-0">
        <i class="ri-arrow-up-s-line"></i>
    </button>

    <FooterComponent />
</template>
