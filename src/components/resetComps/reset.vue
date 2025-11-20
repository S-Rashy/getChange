<script>
import Gbutton from "../slots/GButton.vue";

export default {
  name: "reset",
  components: {
    Gbutton,
  },
};
</script>

<template>
  <form
    action=""
    class="rounded-[5px] p-7 pt-15 flex flex-col justify-center gap-5 w-[400px] shadow-[0px_20px_50px_0px_#EAEEE9]"
  >
    <section>
      <div class="flex flex-col text-[#6A7E8A]">
        <label for="email">Email</label>
        <div
          class="flex border-b border-[#E6E7EB] items-center justify-between w-full"
        >
          <input
            type="text"
            name=""
            id="email"
            class="text-[#013C61] text-[18px] flex-1 outline-none p-0 m-0 pb-2"
          />
          <img src="../../assets/@.png" alt="" class="w-[14px] h-[14px]" />
        </div>
      </div>
    </section>

    <div class="flex justify-between items-center mt-5">
      <router-link
        to="/auth/login"
        class="text-[#2BDA53] text-[14px] hover:underline"
        >Back to Login</router-link
      >
      <Gbutton>Recover</Gbutton>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
