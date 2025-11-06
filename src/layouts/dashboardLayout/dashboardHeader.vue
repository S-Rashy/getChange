<script>
export default {
  name: "dashboardHeader",

  data() {
    return {
      userEmail: "User",
    };
  },
  mounted() {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      this.userEmail = userData.userEmail;
    }
  },
};
</script>

<template>
  <main class="h-15 w-full flex justify-between items-center px-6 bg-white">
    <img src="../../assets/logo.svg" alt="Logo" />

    <div class="flex justify-between items-center gap-4">
      <div class="w-10 h-10 rounded-[50%] bg-[#6A7E8A]"></div>
      <p class="text-[#013C61] font-medium">Hi, {{ userEmail }}</p>
      <svg
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
  </main>
</template>

<style lang="scss" scoped></style>
