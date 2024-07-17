<script setup>

import NavBar from '../components/NavBar.vue'
import CoursesByParticipant from "../components/CoursesByParticipant.vue" ;
import FooterComponent from "../components/FooterComponent.vue" ;
import { onMounted } from "vue";
import { useAuthStore } from "../stores/counter";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

onMounted(async () => {
    try {
        await authStore.getUser();
        if (authStore.user.role != "participant") {
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
<CoursesByParticipant />
<FooterComponent />


</template>