
<script setup>
// import NavbarComponent from '../components/NavbarComponent.vue'
import NavBar from '../components/NavBar.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import CategoryComponent from '../components/CategoryComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'
import SubscribeComponent from "../components/SubscribeComponent.vue" ;
import FooterComponent from "../components/FooterComponent.vue" ;
// import LoginComponent from '../components/LoginComponent'
import { onMounted } from "vue";
// import { useAuthStore } from "../stores/auth";
import { useAuthStore } from "../stores/counter"

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});
</script>


<template>

    <NavBar />
    <HeaderComponent />
    <CategoryComponent />
    <AboutComponent />
    <SubscribeComponent />
    <FooterComponent />
    <!-- <LoginComponent /> -->

  <!-- <div class="max-w-7xl mx-auto">
    <div v-if="authStore.user">
      <h1>{{ authStore.user.name }}</h1>
      <p>{{ authStore.user.email }}</p>
    </div>
    <div v-else>
      <h1>Go and login</h1>
    </div>
  </div> -->
</template>