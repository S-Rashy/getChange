<script>
import AuthLayout from "./layouts/authLayout/AuthLayout.vue";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.vue";

export default {
  name: "App",
  components: {
    AuthLayout,
    DashboardLayout,
  },
};
</script>

<template>
  <!-- <AuthLayout/> -->
  <!-- <DashboardLayout/> -->
  <RouterView />
</template>

<style></style>
