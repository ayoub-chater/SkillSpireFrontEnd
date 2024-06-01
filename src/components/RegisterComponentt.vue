<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/counter";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const form = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const handleRegister = async () => {
    await authStore.handleRegister(form.value);
    router.push("/");
};
</script>


<template>
    <div class="sign-up-section ptb-100">
        <div class="container">
            <div class="main-max-width">
                <div class="sign-content">
                    <div class="box-content text-center mb-30">
                        <h4>Welcome back</h4>
                        <p>Hey there! Ready to log in? Just enter your username and password below and you'll be back in action in no time. Let's go!</p>
                    </div>
                    <div class="log-from mb-30">
                        <form @submit.prevent="handleRegister">
                            <div class="form-group mb-15">
                                <label class="label-style">Your Name</label>
                                <input type="name" v-model="form.name" placeholder="Your Name" class="bg-white input-style border-style w-100 h-60">
                            </div>
                            <div class="form-group mb-15">
                                <label class="label-style">Your email</label>
                                <input type="email" v-model="form.email" placeholder="Your email" class="bg-white input-style border-style w-100 h-60">
                            </div>
                            <div class="form-group mb-30">
                                <label class="label-style">Password</label>
                                <input type="text" v-model="form.password" placeholder="password" class="bg-white input-style border-style w-100 h-60">
                            </div>
                            <div class="form-group mb-30">
                                <label class="label-style">Confirm Password</label>
                                <input type="text" v-model="form.password_confirmation" placeholder="Confirm Password" class="bg-white input-style border-style w-100 h-60">
                            </div>
                            <div class="meta-info d-flex justify-content-between mb-20">
                                <div class="form-check edu-check">
                                    <input class="form-check-input edu-check-input" type="checkbox" value="" id="defaultCheck4">
                                    <label class="form-check-label edu-check-label" for="defaultCheck4">
                                            I agree to the terms of service
                                        </label>
                                </div>
                            </div>
                            <button type="submit" class="btn style-one w-100 box-shadow-1">Register</button>
                        </form>
                    </div>
                    <div class="sign-link text-center">
                        <span>have an account? <router-link to="/login" class="nav-link">Sign In</router-link></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.sign-content {
    padding: 35px 30px;
    max-width: 600px;
    margin: auto;
    border: 1px solid var(--borderColor);
    border-radius: 5px;
}

.acount-s .btn {
    background-color: var(--offWhiteColor);
    padding: 16px 25px;
}

.acount-s .btn img {
    margin-right: 10px;
}
.register-area {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(../img/all-img/register-area-bg.jpg);
}

.register-area::after {
    left: 0;
    bottom: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 147px;
    z-index: -1;
    background-color: var(--whiteColor);
}

.register-content h2 {
    font-size: 35px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 15px;
}

.register-content {
    margin-bottom: 25px;
    margin-right: 20px;
}

.register-content .upcoming-timer {
    margin-top: 25px;
}

.register-content .upcoming-timer .coundown-container .big-text {
    font-size: 30px;
    margin-bottom: 0;
    color: var(--whiteColor);
}

.register-content .upcoming-timer .coundown-container .countdown-el {
    width: 80px;
    height: 80px;
    padding-top: 10px;
    text-align: center;
    margin-right: 30px;
    border-radius: 10px;
    background-color: var(--secondaryColor);
}

.register-content .upcoming-timer .coundown-container .countdown-el:last-child {
    margin-right: 0;
}

.register-content .upcoming-timer .coundown-container .countdown-el span {
    font-size: 14px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
}

.register-form {
    padding: 30px;
    margin-left: 29px;
    border-radius: 10px;
    background-color: var(--whiteColor);
    box-shadow: 0px 5px 30px 0px rgba(0, 1, 17, 0.05);
}

.register-form h3 {
    font-size: 20px;
    margin-bottom: 30px;
}

.register-form form .form-group {
    margin-bottom: 20px;
}

.register-form form .form-group .form-select {
    border: 0;
    width: 100%;
    height: 50px;
    box-shadow: unset;
    border-radius: 5px;
    padding-left: 20px;
    color: rgba(81, 102, 108, 1);
    background-color: rgba(246, 246, 246, 1);
}

.register-form form .form-group .from-control {
    border: 0;
    width: 100%;
    height: 50px;
    box-shadow: unset;
    border-radius: 5px;
    padding-left: 20px;
    background-color: rgba(246, 246, 246, 1);
}

.register-form form .form-group .from-control.textarea {
    height: 129px;
    padding-top: 20px;
}
</style>
