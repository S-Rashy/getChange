<script>
import Gbutton from "../slots/Gbutton.vue";
import Modal from "../slots/modal.vue";

export default {
  components: {
    Modal,
    Gbutton
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
      <div class="flex justify-end items-center">
        <Gbutton> Send Invite </Gbutton>
      </div>
    </section>
  </Modal>
</template>

<style  scoped>
form input{
    outline: none;
    color: #013C61;
    border-bottom: 1px solid #E6E7EB;
    padding: 12px 5px;
}
::placeholder, label{
    font-size: 12px;
    color: #6A7E8A;
}
</style>


