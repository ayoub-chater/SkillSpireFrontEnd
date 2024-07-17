<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import SidebarAdminComponent from "../components/SidebarAdminComponent.vue";
import { useAuthStore } from "../stores/counter";
import { useAdmins } from "../stores/counter";

const router = useRouter();
const authStore = useAuthStore();
const admins = useAdmins();

onMounted(async () => {
    try {
        await authStore.getUser();
        if (authStore.user.role != "admin") {
            router.push("/login");
        } else {
            await admins.fetchprofessors();
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
    <SidebarAdminComponent v-if="authStore.user" />
</template>
