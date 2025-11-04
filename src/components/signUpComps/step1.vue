<script>
export default {
  name: "Step1",
  emits: ["nextstep", "email-input"],
  data() {
    return {
      showPassword: false,
      emailInput: "",
    };
  },
  methods: {
    handleNextStep() {
      this.$emit("nextstep");
      this.$emit("email-input", this.emailInput);
    },
  },
};
</script>

<template>
  <form
    class="rounded-[5px] p-7 flex flex-col gap-2 w-[400px] shadow-[0px_20px_50px_0px_#EAEEE9]"
  >
    <section class="grid grid-cols-2 gap-3 w-full">
      <div class="flex flex-col text-[#6A7E8A]">
        <label for="firstName">First Name</label>
        <div class="flex border-b border-[#E6E7EB] items-center">
          <input
            type="text"
            name=""
            id="firstName"
            class="text-[#013C61] text-[18px] outline-none p-0 m-0 pb-2 max-w-[90%]"
          />
          <img src="../../assets/user.png" alt="" class="w-[14px] h-[14px]" />
        </div>
      </div>

      <div class="flex flex-col text-[#6A7E8A]">
        <label for="lastName">Last Name</label>
        <div class="flex border-b border-[#E6E7EB] items-center">
          <input
            type="text"
            name=""
            id="lastName"
            class="text-[#013C61] text-[18px] outline-none p-0 m-0 pb-2 w-[90%]"
          />
          <img src="../../assets/user.png" alt="" class="w-[14px] h-[14px]" />
        </div>
      </div>
    </section>

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
            v-model="emailInput"
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
            name="password"
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
    <div class="flex justify-end">
      <button
        class="w-35 h-10 bg-[#2BDA53] hover:bg-[#25C248] hover:shadow-lg hover:scale-105 mt-5 cursor-pointer text-white transition-all duration-200"
        type="button"
        @click="handleNextStep"
      >
        Continue
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
