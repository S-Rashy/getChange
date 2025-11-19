<script>
import LogoutModal from "@/components/modals/LogoutModal.vue";

export default {
  name: "dashboardHeader",
  components: {
    LogoutModal,
  },

  data() {
    return {
      userEmail: "User",
      showDropdown: false,
      showModal: false,
    };
  },
  mounted() {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      this.userEmail = userData.userEmail;
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    closeDropdown() {
      this.showDropdown = false;
    },
    openModal() {
      this.showModal = true;
      this.showDropdown = false;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<template>
  <main
    class="h-15 w-full flex justify-between items-center px-6 pr-12 bg-white fixed  z-[9999]"
  >
    <img src="../../assets/logo.svg" alt="Logo" />

    <div class="flex justify-between items-center gap-4">
      <div class="w-10 h-10 rounded-[50%] bg-[#6A7E8A]"></div>
      <p class="text-[#013C61] font-medium">Hi, {{ userEmail || "User" }}</p>
      <svg
        @click="toggleDropdown"
        class="cursor-pointer"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.99889 5.55556L10 0.00111334L0 0L4.99889 5.55556Z"
          fill="#013C61"
        />
      </svg>
    </div>
    <div
      v-if="showDropdown"
      class="absolute right-8 mt-55 w-40 py-6 bg-white shadow rounded-lg overflow-hidden z-50 text-[#013C61]"
    >
      <RouterLink to="/history" @click="closeDropdown">
        
        <div class="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-200">
          <img src="../../assets/clock.svg" alt="" />
          <p>Wallet History</p>
        </div>
      </RouterLink>

      <RouterLink to="/settings" @click="closeDropdown">
       <div class="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-200">
          <img src="../../assets/settings.svg" alt="" />
          <p>Settings</p>
        </div>
      </RouterLink>

       <div @click="openModal" class="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-200">
          <img src="../../assets/logout.svg" alt="" />
          <p>Logout</p>
        </div>
    </div>
    <LogoutModal v-if="showModal" @close="closeModal" />
  </main>
</template>

<style lang="scss" scoped></style>
