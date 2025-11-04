<script>
import AuthFooter from "./authFooter.vue";
import AuthHeader from "./authHeader.vue";

export default {
  name: "authLayout",
  components: {
    AuthHeader,
    AuthFooter,
  },
  data() {
    return {
      signUPStep: 1,
    };
  },
  methods: {
    updateStep(step) {
      this.signUPStep = step;
    },
  },
};
</script>

<template>
  <main class="flex items-center gap-8">
    <div
      class="bg-[url('@/assets/signUpImg.svg')] bg-contain bg-cover h-screen w-[450px] flex flex-col justify-end gap-4 items-center text-center text-white p-10"
    >
      <p>No Hazzles</p>
      <p class="w-[80%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
    </div>

    <section class="flex flex-col justify-center w-[60%] h-screen pt-10">
      <div class="flex flex-col gap-5 ml-30">
        <AuthHeader v-if="signUPStep !== 3"/>

        <RouterView @step="updateStep"/>
      </div>
      <AuthFooter />
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
