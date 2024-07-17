<script setup>

import NavBar from '../components/NavBar.vue'
import CoursesByProfessor from "../components/CoursesByProfessor.vue" ;
import FooterComponent from "../components/FooterComponent.vue" ;
import { onMounted } from "vue" ;
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/counter";

const router = useRouter();
const authStore = useAuthStore();

onMounted(async () => {
    try {
        await authStore.getUser();
        if (authStore.user.role != "professor") {
            router.push("/login");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        if (error.response && error.response.status === 401) {
            router.push("/login");
        }
    }
});

</script>


<template>

<NavBar />
<CoursesByProfessor />
<FooterComponent />


</template>