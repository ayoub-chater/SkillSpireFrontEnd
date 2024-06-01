<script setup>
import router from "../router";

// import NavBar from '../components/NavBar.vue'
// import BannerComponent from "../components/BannerComponent.vue" ;
// import SubscribeComponent from "../components/SubscribeComponent.vue" ;
// import FooterComponent from "../components/FooterComponent.vue" ;
import SidebarAdminComponent from "../components/SidebarAdminComponent.vue" ;

import { onMounted } from "vue";
import { useAuthStore } from "../stores/counter";
import { useAdmins } from "../stores/counter";

const authStore = useAuthStore();
const admins = useAdmins();

onMounted(async () => {
    try {
        await authStore.getUser();
        if (!authStore.user) {
            router.push("/login");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        if (error.response && error.response.status === 401) {
            router.push("/login");
        }
    }

    await admins.fetchprofessors();
});

</script>


<template>
    <SidebarAdminComponent />
</template>
