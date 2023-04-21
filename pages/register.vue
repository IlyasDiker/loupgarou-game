<template>
    <form @submit.prevent="onSubmit">
        <h1>Register</h1>
        <input type="email" placeholder="Email" v-model="formData.email">
        <input type="password" placeholder="Password" v-model="formData.password">
        <button type="submit">Submit</button>
    </form>
</template>

<script setup>

const formData = ref({
    email: '',
    password: '',
})

function onSubmit(){
    useFetch('/api/register', {
        method: 'POST',
        body:{
            ...formData.value
        }
    }).then((res) => {
        console.log('%cregister.vue line:24 res', 'color: #007acc;', res.data.value);
    })
}
</script>