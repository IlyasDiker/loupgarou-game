<template>
    <nav class="flex flex-col items-center gap-4 bg-neutral-800 shadow">
        <div class="container flex flex-row justify-between px-4 sm:px-6 py-3">
            <nuxt-link to="/">
                <AppLogo class="h-14 w-fit hover:text-blue-500"/>
            </nuxt-link>
            <ul class="flex flex-row items-center gap-4">
                <li>
                    <NuxtLink to="/login" class="game-btn">Login</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/register" class="game-btn">Register</NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.game-btn {
    @apply flex flex-row gap-3 px-3 py-2 font-medium rounded-lg text-sm dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700 dark:border-neutral-700;
}
</style>