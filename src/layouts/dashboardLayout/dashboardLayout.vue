<script>
import DashboardHeader from "./dashboardHeader.vue";
import DashboardPhone from "./dashboardPhone.vue";
import DashboardSidebar from "./dashboardSidebar.vue";

export default {
  name: "dashboardLayout",
  components: {
    DashboardHeader,
    DashboardSidebar,
    DashboardPhone
  },
  methods: {
    logout() {
      localStorage.removeItem("userData");
      this.$router.push({ name: "auth-page" });
    },
  },
};
</script>

<template>
  <div class="bg-gray-200">
    <DashboardHeader />

    <div class="flex">
      <DashboardSidebar />
      <div >
        <RouterView />
    </div>

      <!-- <button
        @click="logout"
        class="w-35 h-10 bg-[#2BDA53] cursor-pointer text-white mx-80 my-50 hover:bg-[#25C248] hover:shadow-lg hover:scale-105 mt-5 cursor-pointer text-white transition-all duration-200""
      >
        Log out
      </button> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
