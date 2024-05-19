<script setup>
import { onMounted , computed , ref } from "vue";
import { useRoute } from 'vue-router';
import { useUser } from "../stores/counter";
const user = useUser();

const users = ref([]);

const route = useRoute();
const role = computed(() => {
    const part = route.path.slice(12);
    return part; 
});


onMounted(async () => {
    if ( role === 'Professor' ) {
        await user.listProfessors();
    } else if ( role === 'Participant' ) {
        await user.listPaticipants();
    }
    users.value = user.users;
});

</script>

<template>
    <div class="sign-in-section">
        <h1>List Of {{ role }}</h1>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
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