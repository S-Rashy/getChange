<script>
export default {
  name: "Step2",
  emits: ["nextstep"],
  methods: {
    handleNextStep() {
      this.$emit("nextstep");
    },
  },
};
</script>

<template>
  <form
    class="rounded-[5px] p-7 flex flex-col gap-2 w-[400px] shadow-[0px_20px_50px_0px_#EAEEE9]"
  >
    <section>
      <div class="flex flex-col text-[#6A7E8A]">
        <label for="businessName">Business Name</label>
        <div
          class="flex border-b border-[#E6E7EB] items-center justify-between w-full"
        >
          <input
            type="text"
            name=""
            id="businessName"
            class="text-[#013C61] text-[18px] flex-1 outline-none p-0 m-0 pb-2"
          />
          <img src="../../assets/office.png" alt="" class="w-[14px] h-[14px]" />
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col text-[#6A7E8A]">
        <label for="businessAddress">Business Address</label>
        <div
          class="flex border-b border-[#E6E7EB] items-center justify-between w-full"
        >
          <input
            type="text"
            name=""
            id="businessAddress"
            class="text-[#013C61] text-[18px] flex-1 outline-none p-0 m-0 pb-2"
          />
          <img
            src="../../assets/map-pin.png"
            alt=""
            class="w-[14px] h-[14px]"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col text-[#6A7E8A]">
        <label for="phone">Phone Number</label>
        <div
          class="flex border-b border-[#E6E7EB] items-center justify-between w-full"
        >
          <input
            type="text"
            name=""
            id="phone"
            class="text-[#013C61] text-[18px] flex-1 outline-none p-0 m-0 pb-2 max-w-[90%]"
          />
          <img src="../../assets/phone.png" alt="" class="w-[14px] h-[14px]" />
        </div>
      </div>
    </section>
    <div class="flex justify-end">
      <button
        class="w-35 h-10 bg-[#2BDA53] hover:bg-[#25C248] hover:shadow-lg hover:scale-105 mt-5 cursor-pointer text-white transition-all duration-200"
        type="button"
        @click="handleNextStep"
      >
        Finish
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
