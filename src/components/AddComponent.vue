<script setup>
import { computed, ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from 'vue-router';
import { useUser } from "@/stores/counter";
import { useAdmins } from "@/stores/counter";
import { useFomations } from "@/stores/counter";
import { useAuthStore } from "@/stores/counter";

const authStore = useAuthStore();
const user = useUser();

const formations = useFomations();

const form = ref({
    name: "",
    email: "",
    password: "",
    qualification: "",
    expertise: "",
    title: "",
    description: "",
    price: "",
    start_date: "",
    end_date: "",
    image_path: "",
    professor_id: "",
    centre_id: "",
    salle_id: "",
    address: "",
    admin_id: ""
});

const route = useRoute();
const role = computed(() => {
    const part = route.path.slice(11).toLowerCase();
    return part;
});

const professors = ref([]);
const centres = ref([]);
const salles = ref([]);

const fetchProfessors = async () => {
    const response = await axios.get('/api/users/professors');
    professors.value = response.data;
};

const fetchCentres = async () => {
    const response = await axios.get('/api/centres');
    centres.value = response.data;
};

const fetchSalles = async () => {
    const response = await axios.get('/api/salles');
    salles.value = response.data;
};

onMounted(async () => {
    console.log("Before getUser:", authStore.admin_id); 
    fetchProfessors();
    fetchCentres();
    fetchSalles();
    await authStore.getUser();
    if (authStore.user && authStore.user.role === 'admin') {
        form.value.admin_id = authStore.admin_id;
    }
});

const addEntity = async () => {
    if (role.value === 'professor' || role.value === 'Participant') {
        await user.addUser(form.value, role.value);
    } else if (role.value === 'formations') {
        await user.addCourse(form.value);
    } else if (role.value === 'centres') {
        await user.addCentre(form.value);
    }
};
</script>

<template>
    <div class="sign-in-section">
        <h1>Add {{ role }}</h1>
        <div class="container">
            <div class="main-max-width">
                <div class="sign-content">
                    <div class="log-from mb-30">
                        <form @submit.prevent="addEntity">
                            <div v-if="role === 'professor' || role === 'participant'">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group mb-15">
                                            <label class="label-style">Full Name</label>
                                            <input type="text" v-model="form.name" placeholder="Full Name"
                                                class="bg-white input-style border-style w-100 h-60">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group mb-15">
                                            <label class="label-style">Image</label>
                                            <input type="text" v-model="form.image_path" placeholder="Image Path"
                                                class="bg-white input-style border-style w-100 h-60">
                                        </div>
                                    </div>
                                </div>
                                <div v-if="role === 'professor'">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group mb-15">
                                                <label class="label-style">Qualification</label>
                                                <input type="text" v-model="form.qualification"
                                                    placeholder="Qualification"
                                                    class="bg-white input-style border-style w-100 h-60">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group mb-15">
                                                <label class="label-style">Expertise</label>
                                                <input type="text" v-model="form.expertise" placeholder="Expertise"
                                                    class="bg-white input-style border-style w-100 h-60">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-15">
                                    <label class="label-style">Your email</label>
                                    <input type="email" v-model="form.email" placeholder="Your email"
                                        class="bg-white input-style border-style w-100 h-60">
                                </div>
                                <div class="form-group mb-30">
                                    <label class="label-style">Password</label>
                                    <input type="password" v-model="form.password" placeholder="Enter your password"
                                        class="bg-white input-style border-style w-100 h-60">
                                </div>
                            </div>

                            <div v-if="role === 'formations'">
                                <div class="form-group mb-15">
                                    <label class="label-style">Title</label>
                                    <input type="text" v-model="form.title" placeholder="Title"
                                        class="bg-white input-style border-style w-100 h-60" required>
                                </div>
                                <div class="form-group mb-15">
                                    <label class="label-style">Description</label>
                                    <input type="text" v-model="form.description" placeholder="Description"
                                        class="bg-white input-style border-style w-100 h-60" required>
                                </div>
                                <div class="form-group mb-15">
                                    <label class="label-style">Price</label>
                                    <input type="number" v-model="form.price" placeholder="Price"
                                        class="bg-white input-style border-style w-100 h-60" required>
                                </div>
                                <div class="form-group mb-15">
                                    <label class="label-style">Start Date</label>
                                    <input type="date" v-model="form.start_date" placeholder="Start Date"
                                        class="bg-white input-style border-style w-100 h-60" required>
                                </div>
                                <div class="form-group mb-15">
                                    <label class="label-style">End Date</label>
                                    <input type="date" v-model="form.end_date" placeholder="End Date"
                                        class="bg-white input-style border-style w-100 h-60" required>
                                </div>
                                <div class="form-group mb-15">
                                    <label class="label-style">Image Path</label>
                                    <input type="text" v-model="form.image_path" placeholder="Image Path"
                                        class="bg-white input-style border-style w-100 h-60" required>
                                </div>
                                <div class="form-group mb-15">
                                    <label class="label-style">Professor</label>
                                    <select v-model="form.professor_id"
                                        class="bg-white input-style border-style w-100 h-60" required>
                                        <option v-for="professor in professors" :key="professor.id"
                                            :value="professor.id">
                                            {{ professor.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group mb-15">
                                    <label class="label-style">Centre</label>
                                    <select v-model="form.centre_id"
                                        class="bg-white input-style border-style w-100 h-60" required>
                                        <option v-for="centre in centres" :key="centre.id" :value="centre.id">
                                            {{ centre.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group mb-15">
                                    <label class="label-style">Salle</label>
                                    <select v-model="form.salle_id" class="bg-white input-style border-style w-100 h-60"
                                        required>
                                        <option v-for="salle in salles" :key="salle.id" :value="salle.id">
                                            {{ salle.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div v-if="role === 'centres'">
                                <div class="form-group mb-15">
                                    <label class="label-style">Name</label>
                                    <input type="text" v-model="form.name" placeholder="nom de centre"
                                        class="bg-white input-style border-style w-100 h-60" required>
                                </div>
                                <div class="form-group mb-15">
                                    <label class="label-style">Address</label>
                                    <input type="text" v-model="form.address" placeholder="address de centre"
                                        class="bg-white input-style border-style w-100 h-60" required>
                                </div>
                                <div class="form-group mb-15">
                                    <label class="label-style">Image Path</label>
                                    <input type="text" v-model="form.image_path" placeholder="image de centre"
                                        class="bg-white input-style border-style w-100 h-60" required>
                                </div>

                                <div class="form-group mb-15">
                                    <label class="label-style">Admin ID</label>
                                    <input type="text" v-model="form.admin_id" placeholder="admin id"
                                        class="bg-white input-style border-style w-100 h-60" readonly>
                                </div>

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