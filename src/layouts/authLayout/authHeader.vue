<script>
import SignUpHeader from '@/components/signUpComps/signUpHeader.vue';
import LoginHeader from '@/components/loginComps/loginHeader.vue';
import ResetHeader from '@/components/resetComps/resetHeader.vue';
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
      <SignUpHeader v-if="$route.path === '/signup'" />
        <LoginHeader v-else-if="$route.path === '/login'" />
        <ResetHeader v-else-if="$route.path === '/resetPassword'" />
</template>



<style scoped>
    div {
       position: absolute;
       top: 50px;
    }
</style>