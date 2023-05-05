// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,

    runtimeConfig:{
        supabaseAnonToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwZWt3c3R0YW9rZGZqbGNza2hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwNzQ5MTQsImV4cCI6MTk5NzY1MDkxNH0.JGahyvfBSaAHUjFMqNadxKbNzecOacD8Y3ku-scP_vc",
        supabaseUrl: "https://apekwsttaokdfjlcskhi.supabase.co",
        supabaseServiceRole: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwZWt3c3R0YW9rZGZqbGNza2hpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjA3NDkxNCwiZXhwIjoxOTk3NjUwOTE0fQ.AE8kRi8AKyNs0VSnLPBGHoYT8OsdtlNPXTcYs_TXJN4",
    },

    css: ['~/assets/css/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    devtools: true
})
