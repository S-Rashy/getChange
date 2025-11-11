<script>
export default {
  name: "authImg",
  data() {
    return {
      showBG: true,
    };
  },
  mounted() {
    setInterval(() => {
      this.showBG = !this.showBG;
    }, 5000);
  },
};
</script>

<template>
  <div
  v-show="showBG"
    class="bg-[url('@/assets/Modelboy.svg')] bg-contain bg-cover h-screen w-[450px] flex flex-col justify-end gap-4 items-center text-center text-white p-10"
  >
    <p>No Hazzles</p>
    <p class="w-[80%]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
    </p>
  </div>

  <div
   v-show="!showBG"
    class="bg-[url('@/assets/Modelgirl.png')] bg-contain bg-cover h-screen w-[450px] flex flex-col justify-end gap-4 items-center text-center text-white p-10"
  >
    <p>No Hazzles</p>
    <p class="w-[80%]">
       Consectetur adipiscing elit, sed do eiusmod, Lorem ipsum dolor sit amet.
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
