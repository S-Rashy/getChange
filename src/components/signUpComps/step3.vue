<script>
export default {
  name: "Step3",
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
      {{ email || "your email address" }}. Complete registration by
      following the link.
    </p>
    <RouterLink to="/">
      <button
        class="w-35 h-10 bg-[#2BDA53] hover:bg-[#25C248] hover:shadow-lg hover:scale-105 mt-5 cursor-pointer text-white transition-all duration-200"
        type="button"
      >
        Dashboard
      </button>
    </RouterLink>
  </main>
</template>

<style lang="scss" scoped></style>
