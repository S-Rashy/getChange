<script >
import AuthLayout from './layouts/authLayout/authLayout.vue';
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout.vue';

export default {
  name: 'App',
  components: {
    AuthLayout,
    DashboardLayout
  }
};
</script>

<template>
    <AuthLayout/>
     <!-- <DashboardLayout/> -->
</template>

<style >
body{
  font-family:  sans-serif;

}
</style>
