<script>
import Modal from "../slots/modal.vue";

export default {
  components: {
    Modal,
  },
};
</script>

<template>
  <Modal>
    <section class="space-y-4">
      <h4 class="text-[#013C61] text-[24px] font-medium">
        Add a new member of your team
      </h4>
      <form action="" class="flex flex-col gap-5">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Assign Role" />
      </form>
      <div class="flex justify-between items-center">
        <Gbutton> Send Invite </Gbutton>
      </div>
    </section>
  </Modal>
</template>

<style lang="scss" scoped></style>
