<script>
import AuthFooter from "./AuthFooter.vue";
import AuthHeader from "./AuthHeader.vue";
import AuthImg from "./AuthImg.vue";

export default {
  name: "authLayout",
  components: {
    AuthHeader,
    AuthFooter,
    AuthImg,
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
    <AuthImg/>

    <section class="flex flex-col justify-center w-[60%] h-screen pt-10">
      <div class="flex flex-col gap-5 ml-30">
        <AuthHeader v-if="signUPStep !== 3" />

        <RouterView @step="updateStep" />
      </div>
      <AuthFooter />
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
