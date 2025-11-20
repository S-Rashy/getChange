<script>
import Gbutton from "../slots/GButton.vue";
import ShortModal from "../slots/ShortModal.vue";
import Wbutton from "../slots/WButton.vue";
export default {
  components: {
    ShortModal,
    Gbutton,
    Wbutton,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },

    logout() {
      localStorage.removeItem("userData");
      this.$router.push({ name: "auth-page" });
    },
  },
};
</script>

<template>
  <ShortModal>
    <section class="space-y-8 px-4">
      <h4 class="text-[#013C61] text-[28px] font-medium text-center">
        Are you sure you want to log out?
      </h4>

      <div class="flex justify-center gap-8 items-center">
        <Wbutton @click="closeModal"> No, Cancel</Wbutton>
        <Gbutton @click="logout"> Yes, Log out </Gbutton>
      </div>
    </section>
  </ShortModal>
</template>

<style lang="scss" scoped></style>
