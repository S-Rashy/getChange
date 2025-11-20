<script>
import SignUpHeader from '@/components/signUpComps/SignUpHeader.vue';
import LoginHeader from '@/components/loginComps/LoginHeader.vue';
import ResetHeader from '@/components/resetComps/ResetHeader.vue';
    export default {
        name: "signUpHeader", 
        components: {
          SignUpHeader,
          LoginHeader,
          ResetHeader
        }
    }
</script>

<template>
      <SignUpHeader v-if="$route.path === '/auth/signup'" />
        <LoginHeader v-else-if="$route.path === '/auth/login'" />
        <ResetHeader v-else-if="$route.path === '/auth/resetPassword'" />
</template>



<style scoped>
    div {
       position: absolute;
       top: 50px;
    }
</style>