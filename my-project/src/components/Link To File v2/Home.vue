<template>
    <div class="m-auto w-[50%] h-[20rem] bg-blue-500 border rounded-md  flex justify-center items-center gap-20">
        <button class="w-36 h-20 font-bold text-2xl bg-green-500 rounded-md hover:bg-green-900 hover:text-white" type="button" @click="goToLogin">Login</button>
        <button class="w-36 h-20 font-bold text-2xl bg-yellow-500 rounded-md hover:bg-yellow-900 hover:text-white" type="button" @click="goToSignUp">Sign Up</button>
    </div>
</template>
<script>
    export default {
        methods: {
            goToLogin() {
                this.$router.push('/Login')
            },
            goToSignUp() {
                this.$router.push('/SignUp')
            },
        },
    }
</script>