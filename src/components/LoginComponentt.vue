<script setup>
import { ref } from "vue";
// import { useAuthStore } from "../stores/counter";

// const authStore = useAuthStore();

const form = ref({
    email: "",
    password: "",
});

</script>

<template>
    <div class="sign-in-section ptb-100">
        <div class="container">
            <div class="main-max-width">
                <div class="sign-content">
                    <div class="box-content text-center mb-30">
                        <h4>Welcome back</h4>
                        <p>Hey there! Ready to log in? Just enter your username and password below and you'll be back in action in no time. Let's go!</p>
                    </div>
                    <div class="log-from mb-30">
                        <form @submit.prevent="authStore.handleLogin(form)">
                        <!-- <form> -->
                            <div class="form-group mb-15">
                                <label class="label-style">Your email</label>
                                <input type="email" v-model="form.email" placeholder="Your email" class="bg-white input-style border-style w-100 h-60">
                            </div>
                            <div class="form-group mb-30">
                                <label class="label-style">Password</label>
                                <input type="text" v-model="form.password" placeholder="Enter your password" class="bg-white input-style border-style w-100 h-60">
                            </div>
                            <button type="submit" class="btn style-one w-100 box-shadow-1">Login</button>
                        </form>
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

.log-from .btn.signin {
    background-color: var(--offWhiteColor);
    color: var(--mainColor);
}

.log-from .btn.signin:hover {
    color: var(--whiteColor);
}

.sign-link a {
    text-decoration: underline;
    color: var(--mainColor);
}

.sign-link a:hover {
    color: var(--secondaryColor);
}

.log-from .meta-info a {
    color: var(--secondaryColor);
}

.log-from .form-group input:focus {
    border-color: var(--secondaryColor);
}

.text-sin::after {
    position: absolute;
    content: '';
    top: 24px;
    left: 0;
    background-color: var(--borderColor);
    height: 1px;
    width: 100%;
    z-index: 0;
}

.text-sin p {
    padding: 10px 15px;
    background-color: var(--whiteColor);
    position: relative;
    z-index: 1;
    display: inline-block;
}
</style>