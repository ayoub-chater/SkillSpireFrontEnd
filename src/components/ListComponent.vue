<script setup>
import { onMounted, computed, ref, watch } from "vue";
import { useRoute } from 'vue-router';
import { useUser } from "../stores/counter";

const user = useUser();
const users = ref([]);
const centres = ref([]);
const items = ref([]);
const editMode = ref(false);
const centreEditMode = ref(false);
const editedProfessor = ref({});
const editedParticipant = ref({});
const editedRole = ref({});
const editingCentre = ref({});
const editingFormation =ref({});
const formationEditMode =ref({});

const route = useRoute();

const role = computed(() => {
    const part = route.path.slice(12);
    return part; 
});

console.log(role.value);

const fetchData = async () => {
    if (role.value === 'Professor') {
        await user.listProfessors();
        users.value = user.professors;
    } else if (role.value === 'Participant') {
        await user.listParticipants();
        users.value = user.participants;
    } else if (role.value === 'formations' || role.value === 'salle') {
        await user.listFormationsWithInfo();
        items.value = user.listFormationsWithInfo;
    } else if (role.value === 'centres' || role.value === 'salle') {
        await user.getCentre();
        centres.value = user.listCentresInfo;
    }
}

const deleteUser = async (id) => {
    await user.deleteUser(id, role.value);
    await fetchData();
};

const editUser = (participant) => {
    editedParticipant.value = { ...participant };
    editedRole.value = role.value;
    editMode.value = true;
};

const editProf = (prof, role) => {
    editedProfessor.value = { ...prof };
    editedRole.value = role;
    editMode.value = true;
};

const deleteCentre = async (id) => {
    await user.deleteCentre(id);
    await fetchData();
};

const deleteFormation = async (id) => {
    await user.deleteFormation(id);
    await fetchData();
};

const openEditFormationModal = (formation) => {
    editingFormation.value = { ...formation };
    formationEditMode.value = true;
};

const editCentre = (centre) => {
    editingCentre.value = { ...centre };
    centreEditMode.value = true;
};

const editFormation = (formation) => {
    editingFormation.value = { ...formation };
    formationEditMode.value = true;
};
const saveEditedParticipant = async () => {
    try {
        await user.updateUser(editedParticipant.value.id, editedRole.value, editedParticipant.value);
        editMode.value = false;
    } catch (error) {
        console.error('Error updating participant:', error);
    }
};

const saveEditedCentre = async () => {
    try {
        await user.updateCentre(editingCentre.value.id, editingCentre.value);
        await fetchData();
        centreEditMode.value = false;
    } catch (error) {
        console.error('Error updating centre:', error);
    }
};

const saveEditedProfessor = async () => {
    try {
        await user.updateUser(editedProfessor.value.id, editedRole.value, editedProfessor.value);
        editMode.value = false;
    } catch (error) {
        console.error('Error updating professor:', error);
    }
};
const saveEditedFormation = async () => {
    try {
        await user.updateFormation(editingFormation.value.id, editingFormation.value);
        await fetchData();
        formationEditMode.value = false;
    } catch (error) {
        console.error('Error updating formation:', error);
    }
};

const cancelEdit = () => {
    formationEditMode.value = false;
};

onMounted(fetchData);

watch(() => route.params, fetchData);
</script>


<template>
    <div class="sign-in-section">
        <h1>List Of {{ role }}</h1>
        <table v-if="role === 'Professor'" class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col" v-if="role === 'Professor'">Expertise</th>
                    <th scope="col" v-if="role === 'Professor'">Qualification</th>
                    <th scope="col">Email</th>
                    <th scope="col">Controle</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ user.name }}</td>
                    <td v-if="role === 'Professor' && user.professors.length > 0">{{ user.professors[0].expertise }}</td>
                    <td v-if="role === 'Professor' && user.professors.length > 0">{{ user.professors[0].qualification }}</td>
                    <td>{{ user.email }}</td>
                    <td>Edit delete</td>
                </tr>
            </tbody>
        </table>
        <table v-if="role === 'centres'" class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(centre, index) in centres" :key="centre.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ centre.name }}</td>
                <td>{{ centre.address }}</td>
                <td>
                    <button class="deleteBtn" @click="deleteCentre(centre.id)">Delete</button>
                    <button class="editBtn" @click="editCentre(centre)">Edit</button>
                </td>
            </tr>
        </tbody>
        </table>
        <div v-if="centreEditMode">
        <h3>Edit Centre</h3>
            <form @submit.prevent="saveEditedCentre">
                <label for="editName">Name:</label>
                <input type="text" id="editName" v-model="editingCentre.name" required>
                <label for="editAddress">Address:</label>
                <input type="text" id="editAddress" v-model="editingCentre.address" required>
                <button type="submit">Update</button>
                <button @click="cancelEdit">Cancel</button>
            </form>
        </div>
        <table v-if="role === 'formations' || role === 'salle'" class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(formation, index) in items" :key="formation.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ formation.title }}</td>
                <td>{{ formation.description }}</td>
                <td>{{ formation.price }}</td>
                <td>{{ formation.start_date }}</td>
                <td>{{ formation.end_date }}</td>
                <td>
                    <button class="deleteBtn" @click="deleteFormation(formation.id)">Delete</button>
                    <button class="editBtn" @click="openEditFormationModal(formation)">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div v-if="formationEditMode" class="modal">
            <div class="modal-content">
                <span class="close" @click="cancelEdit">&times;</span>
                <h2>Edit Formation</h2>
                <form @submit.prevent="saveEditedFormation">
                    <label>Title:</label>
                    <input type="text" v-model="editingFormation.title">
                    <label>Description:</label>
                    <textarea v-model="editingFormation.description"></textarea>
                    <label>Price:</label>
                    <input type="number" v-model="editingFormation.price">
                    <label>Start Date:</label>
                    <input type="date" v-model="editingFormation.start_date">
                    <label>End Date:</label>
                    <input type="date" v-model="editingFormation.end_date">
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    </div>
</template>


<style>

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
</style>