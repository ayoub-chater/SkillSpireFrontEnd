
<script setup>

import { onMounted } from "vue";
import { useAuthStore } from "../stores/counter"
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const authStore = useAuthStore();

onMounted(async () => {
    await authStore.getUser();
});

const route = ref(useRoute().path.slice(1));

</script>

<template>
    <section class="page-title-area position-relative">
        <div class="container">
            <div class="main-max-width">
                <div class="page-title-content">
                    <h2>{{ route }}</h2>
                    <ul class="page-breadcrumb align-items-center list-unstyle">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"></li>
                        <li class="primery-link">{{ route }}</li>
                    </ul>
                    <div class="shape-1 moveHorizontal">
                        <img src="./assets/img/icon/shape-2.svg" alt="image">
                    </div>
                    <div class="shape-2">
                        <img src="./assets/img/icon/section-icon-1.svg" alt="image">
                    </div>
                    <div class="shape-3 bounce">
                        <img src="./assets/img/icon/section-icon-2.svg" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style setup>
.page-title-area {
    background-image: url(./assets/img/banner/section-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px 0px;
}

.page-title-content h2 {
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 20px;
}

.page-title-content .page-breadcrumb {
    padding: 20px;
    background-color: var(--whiteColor);
    border-radius: 10px;
    display: inline-flex;
}

.page-title-content .page-breadcrumb .breadcrumb-item {
    color: var(--mainColor);
    font-weight: 600;
    margin-right: 10px;
}

.page-title-content .page-breadcrumb .primery-link {
    color: var(--primaryColor);
    font-weight: 600;
}

.breadcrumb-item+.breadcrumb-item::before {
    content: var(--bs-breadcrumb-divider, "-");
}

.page-title-area .shape-1 {
    position: absolute;
    top: 16%;
    left: 35%;
}

.page-title-area .shape-2 {
    position: absolute;
    bottom: 15%;
    left: 47%;
}

.page-title-area .shape-3 {
    position: absolute;
    top: 18%;
    right: 20%;
}

</style>