<script>
import Step1 from "./step1.vue";
import Step2 from "./step2.vue";
import Step3 from "./step3.vue";
export default {
  name: "signUp",
  components: {
    Step1,
    Step2,
    Step3,
  },
  emits: ["step"],
 data() {
    return {
      currentStep: 1,
      email: "",
    };
  },
  methods: {
   nextStep(){
    this.currentStep ++;
    this.$emit("step", this.currentStep);
   },
   handleEmailInput(email) {
      this.email = email;
    },
  },
};
</script>

<template>
  <main class="flex items-center gap-8">
    <Step1 @nextstep="nextStep"  @email-input="handleEmailInput"  v-if="currentStep === 1"/>
    <Step2 @nextstep="nextStep" v-if="currentStep === 2"/>
    <Step3 v-if="currentStep === 3" :email="email"/>
  </main>
</template>

<style lang="scss" scoped></style>
