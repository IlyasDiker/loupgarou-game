<template>
    <div class="container sm:max-w-screen-sm mx-auto px-4 sm:px-6 py-12">
        <form @submit.prevent="onSubmit" class="bg-neutral-800 rounded-lg shadow p-4 py-6 flex flex-col gap-3">
            <h1 class="text-3xl font-gothic mb-5 self-center">Login</h1>
            <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Sign in with Google
            </button>
            <div class="text-center relative before:content-[''] before:-z-0 before:h-0.5 before:bg-neutral-700 before:w-full before:absolute before:top-1/2 before:right-0 before:left-0">
                <span class="px-3 bg-neutral-800 z-10 mx-auto">or</span>
            </div>
            <div class="flex flex-col">
                <label class="flex flex-col gap-2 mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Username
                    <input type="text" v-model="formData.username" autocomplete="username" class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                </label>
            </div>
            <div class="flex flex-col">
                <label class="flex flex-col gap-2 mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Password
                    <input type="password" v-model="formData.password" autocomplete="password" class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                </label>
            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
</template>

<script setup>
const formData = ref({
    username: '',
    password: '',
})
function onSubmit(params) {
    
}
</script>