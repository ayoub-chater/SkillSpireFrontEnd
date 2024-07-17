<script setup>
import NavBar from '../components/NavBar.vue'
import FooterComponent from "../components/FooterComponent.vue"
import { onMounted, ref } from "vue";
import { useAuthStore, useCart, useFomations, useInscriptions } from "../stores/counter"
import { useRoute, useRouter } from "vue-router";


const Fomation = useFomations();
const authStore = useAuthStore();
const Inscription = useInscriptions();
const formation = ref(null);
const CountOfFormations = ref(null);
const userWithInfo = ref(null);
const router = useRouter();
const cartStore = useCart();

const message = ref(null);
const route = useRoute();

const cart = ref([]);
const total = ref(0);

const user_id = ref(null);
const form = ref({
    inscriptions: [],
    amount: 0,
    
    });


onMounted(async() => {
    try {

        await authStore.getUser();
        await authStore.getUserWithInfo(authStore.user.role, authStore.user.id);
        
        
        
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            console.log(storedCart);
            const items = storedCart.filter(item => item.user_id == authStore.user.id);
            cart.value = items;
            total.value = items.reduce( (totalPrice, item) => totalPrice + parseFloat(item.formation.price) , 0);
            form.value.inscriptions = items
            console.log(cart.value);

        }
        // form.value.user_id = authStore.user.id
        form.value.amount = total.value;
        console.log(form.value.amount);
   
        // message.value = route.query;
        // if (message.value.success) {
        //     localStorage.removeItem('cart');
        // }

        
    } catch (error) {
        console.error('Error during setup:', error);
    }
        
});
function remove(id){
    cartStore.removeFromCart(id);
}

const submitForm = async () => {
    try {
        await Inscription.inscription(form.value);



    } catch (error) {
        console.error('Error during form submission:', error);
    }
}
</script>

<template>
    <link rel="stylesheet" href="../assets/style3.css">

    <NavBar />

    <!--  Page Title Area Start-->
    <section class="page-title-area position-relative">
        <div class="container">
            <div class="main-max-width">
                <div class="page-title-content">
                    <h2>Shopping Cart</h2>
                    <ul class="page-breadcrumb align-items-center list-unstyle">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"></li>
                        <li class="primery-link">Shopping Cart</li>
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

    <!-- Start Cart Section Area -->
    <section class="cart-area ptb-100">
        <div class="container">
            <div class="main-max-width">
                <div class="cart-table table-responsive">
                    <table class="table" v-if="authStore.user">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th></th>
                                <th scope="col">Price</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr v-for="item in cart" :key="item.id" >
                                <td>
                                    <div class="product-info">
                                        <div class="product-thumbnail position-relative">
                                            <img src="../assets/img/all-img/pr-thum.png" alt="image">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="product-name">
                                        <a class="fs-20">{{ item.formation.title }}</a>
                                    </div>
                                </td>
                                <td class="product-price">
                                    <span class="unit-amount">{{ item.formation.price }}</span>
                                </td>
                                <td>
                                    <div class="remove-icon">
                                        <button style="border: none;background: none" @click="remove(item.formation.id)">
                                            <img src="../assets/img/icon/x-iocn.svg" alt="Icon">
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="cart-options-ft" v-if="authStore.user">
                    <div class="row justify-content-between">
                        <div class="col-lg-5 col-sm-12 col-md-7"></div>

                        <div class="col-lg-4 col-sm-12 col-md-5 text-right">
                            <div class="cart-totals">
                                <h3 class="fs-20 mb-20 fc-main">Cart Totals</h3>
                                <ul>
                                    <li>Total <span class="fw-600 fc-main" >{{ total }}</span></li>
                                </ul>
                                <button @click="submitForm"  class="btn style-one box-shadow-1 w-100">Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='text-center' v-else>
                  <p class="fw-bold fs-5">Login to see your cart items</p>
                </div>
            </div>
        </div>
    </section>
    <!-- End Cart Section  Area -->

    <!-- Back to Top -->
    <button type="button" id="backtotop" class="position-fixed text-center border-0 p-0">
        <i class="ri-arrow-up-s-line"></i>
    </button>

    <FooterComponent />
</template>
