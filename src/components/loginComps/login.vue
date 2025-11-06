<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      showPassword: false,
    };
  },
  methods: {
    handleLogin() {
      const userData = {
        isLoggedIn: true,
        userEmail: this.email,
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      this.$router.push({ name: "dashboardHome" });
    },
  },
};
</script>

<template>
  <form
    @submit.prevent="handleLogin"
    class="rounded-[5px] p-7 flex flex-col gap-2 w-[400px] shadow-[0px_20px_50px_0px_#EAEEE9]"
  >
    <section>
      <div class="flex flex-col text-[#6A7E8A]">
        <label for="email">Email</label>
        <div
          class="flex border-b border-[#E6E7EB] items-center justify-between w-full"
        >
          <input
            v-model="email"
            type="text"
            name=""
            id="email"
            class="text-[#013C61] text-[18px] flex-1 outline-none p-0 m-0 pb-2"
          />
          <img src="../../assets/@.png" alt="" class="w-[14px] h-[14px]" />
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col text-[#6A7E8A]">
        <label for="password">Password</label>
        <div
          class="flex border-b border-[#E6E7EB] items-center justify-between w-full"
        >
          <input
            :type="showPassword ? 'text' : 'password'"
            name=""
            id="password"
            class="text-[#013C61] text-[18px] flex-1 outline-none p-0 m-0 pb-2 max-w-[90%]"
          />
          <img
            src="../../assets/eye.png"
            @click="showPassword = !showPassword"
            alt=""
            class="w-[14px] h-[14px]"
          />
        </div>
      </div>
    </section>

    <div class="flex justify-between items-center mt-5">
      <router-link to="/auth/resetPassword" class="text-[#2BDA53] text-[14px]"
        >Forgot Password?</router-link
      >
      <button
        class="w-35 h-10 bg-[#2BDA53] cursor-pointer text-white hover:bg-[#25C248] hover:shadow-lg hover:scale-105 mt-5 cursor-pointer text-white transition-all duration-200""
        type="submit"
      >
        Sign in
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
