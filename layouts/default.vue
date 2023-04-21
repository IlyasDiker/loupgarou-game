<template>
    <Html>
        <Head>

        </Head>
        <Body>
            <div class="app">
                <nav>
                    <div>
                        <NuxtLink to="/login">Login</NuxtLink> /
                        <NuxtLink to="/register">Register</NuxtLink>
                    </div>
                </nav>
                <slot></slot>
            </div>
        </Body>
    </Html>
</template>