<script>
import Gbutton from "../slots/Gbutton.vue";

export default {
  name: "Step3",
  components: {
    Gbutton,
  },
  props: {
    email: String,
  },
};
</script>
<template>
  <main
    class="rounded-[5px] flex flex-col items-center justify-center gap-4 w-[400px] h-[320px] shadow-[0px_20px_50px_0px_#EAEEE9] p-7 text-center"
  >
    <h4 class="text-[#013C61] text-[26px] font-semibold">
      Great to have you onboard
    </h4>
    <p class="text-[#6A7E8A]">
      We just mailed you a confirmation link to
      {{ email || "your email address" }}. Complete registration by following
      the link.
    </p>
    <RouterLink to="/" class="hover:underline">
      <Gbutton> Dashboard </Gbutton>
    </RouterLink>
  </main>
</template>

<style lang="scss" scoped></style>
