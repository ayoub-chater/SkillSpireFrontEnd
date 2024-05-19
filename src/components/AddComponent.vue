<script setup>
import { computed , ref } from "vue";
import { useRoute } from 'vue-router';
import { useUser } from "../stores/counter";

const user = useUser();

const form = ref({
    name: "",
    email: "",
    password: "",
});


const route = useRoute();
const role = computed(() => {
    const part = route.path.slice(11);
    return part; 
});

</script>

<template>
    <div class="sign-in-section">
        <h1>Add {{ role }}</h1>
        <div class="container">
            <div class="main-max-width">
                <div class="sign-content">
                    <div class="log-from mb-30">
                        <form @submit.prevent="user.addUser(form , role)">
                            <div class="row">  
                                <div class="col-lg-6">
                                    <div class="form-group mb-15">
                                        <label class="label-style">Full Name</label>
                                        <input type="text" v-model="form.name" placeholder="Fast Name" class="bg-white input-style border-style w-100 h-60">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group mb-15">
                                        <label class="label-style">Image</label>
                                        <input type="text" placeholder="Last Name" class="bg-white input-style border-style w-100 h-60">
                                    </div>
                                </div>
                            </div>
                            <div class="row" v-if="role === 'Professor'">  
                                <div class="col-lg-6">
                                    <div class="form-group mb-15">
                                        <label class="label-style">Qualification</label>
                                        <input type="text" placeholder="Fast Name" class="bg-white input-style border-style w-100 h-60">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group mb-15">
                                        <label class="label-style">Expertise</label>
                                        <input type="text" placeholder="Last Name" class="bg-white input-style border-style w-100 h-60">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-15">
                                <label class="label-style">Your email</label>
                                <input type="email" v-model="form.email" placeholder="Your email" class="bg-white input-style border-style w-100 h-60">
                            </div>
                            <div class="form-group mb-30">
                                <label class="label-style">Password</label>
                                <input type="text" v-model="form.password" placeholder="Enter your password" class="bg-white input-style border-style w-100 h-60">
                            </div>
                            <button type="submit" class="btn style-one w-100 box-shadow-1">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.login {
    display: flex;
}

h1 {
    margin-bottom: 100px;
}

.sign-in-section {
    margin: 0px auto;
    width: 80%;
    position: relative;
    top: 100px;
    left: 136px;
}

.sign-content {
    padding: 35px 30px;
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