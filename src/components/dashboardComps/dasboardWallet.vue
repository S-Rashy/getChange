<script>
import AddCardModal from "../modals/AddCardModal.vue";
import Gbutton from "../slots/Gbutton.vue";
import Usercards from "./Usercards.vue";

export default {
  name: "DashboardWallet",
  components: {
    Usercards,
    Gbutton,
    AddCardModal,
  },
  data() {
    return {
      showModal: false,
       cards: [
        { num: 1234567890123456, name: "Joshua Bakare", date: "03/25" },
      ],
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    addCard(newCard) {
      this.cards.push(newCard);
      this.closeModal(); 
    },
  },
};
</script>

<template>
  <main class="p-12 w-full min-h-full flex gap-25">
    <div class="w-220">
      <h4 class="text-[#013C61] text-[24px] text-semibold">Debit Cards</h4>
         <Usercards :cards="cards" />

    </div>

    <Gbutton @click="openModal"> Add New</Gbutton>

    <AddCardModal v-if="showModal" @close="closeModal" @send-form="addCard"/>
  </main>
</template>

<style lang="scss" scoped></style>
