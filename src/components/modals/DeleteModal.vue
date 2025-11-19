<script>
import Gbutton from "../slots/Gbutton.vue";
import ShortModal from "../slots/ShortModal.vue";
import Wbutton from "../slots/Wbutton.vue";
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
  },
};
</script>

<template>
  <ShortModal>
    <section class="space-y-6 px-4">
      <h4 class="text-[#013C61] text-[26px] font-medium text-center">
        Delete Employee
      </h4>

      <p>Are you sure you want to delete this employee?</p>

      <div class="flex justify-center gap-8 items-center">
        <Wbutton @click="closeModal"> No, Cancel</Wbutton>
        <Gbutton @click=""> Yes, Delete </Gbutton>
      </div>
    </section>
  </ShortModal>
</template>

<style lang="scss" scoped></style>
