<script>
import DashboardHeader from "./dashboardHeader.vue";
import DashboardSidebar from "./dashboardSidebar.vue";

export default {
  name: "dashboardLayout",
  components: {
    DashboardHeader,
    DashboardSidebar
  },
};
</script>


<template>
  <div>
    <DashboardHeader />
    <div>
        <DashboardSidebar/>
        <RouterView/>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
