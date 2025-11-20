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
   props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    deleteUser() {
      this.$emit("delete-user");
    },
  },
};
</script>

<template>
  <ShortModal>

    <section class="space-y-4 px-4">
      <h4 class="text-[#013C61] text-[26px] font-medium text-center">
        Delete Employee
      </h4>

      <p>Are you sure you want to delete {{ user.firstname }} {{ user.lastname }}?</p>

      <div class="flex justify-center gap-8 items-center">
        <Wbutton @click="closeModal"> No, Cancel</Wbutton>
        <Gbutton @click="deleteUser"> Yes, Delete </Gbutton>
      </div>
    </section>
  </ShortModal>
</template>

<style lang="scss" scoped></style>
