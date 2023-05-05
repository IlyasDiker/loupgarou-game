<template>
    <section class="heroSection">
        <div class="container mx-auto px-4 sm:px-6 z-10 py-6 flex flex-col flex-grow justify-center">
            <div class="flex flex-col text-center items-center">
                <GameLogo class="mb-4"/>
                <NuxtLink to="/game">Get Started</NuxtLink>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.heroSection{
    background-image: url('@/assets/img/wallpaper.webp');
    @apply h-[80vh] flex flex-col isolate bg-cover bg-center relative before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-transparent before:z-0
}
</style>