<script>
import Gbutton from "../slots/Gbutton.vue";
import Modal from "../slots/modal.vue";

export default {
  components: {
    Modal,
    Gbutton,
  },
  emits: ['send-form'],
  data() {
    return {
      newCard: { num: "", name: "", date: "" },
    };
  },
  methods:{
    sendForm(){
        this.$emit('send-form',{ ...this.newCard})
        this.newCard = { num: "", name: "", date: "" };
        console.log("sent");
        
    }
  }
};
</script>

<template>
  <Modal>
    <section class="space-y-4">
      <h4 class="text-[#013C61] text-[24px] font-medium">Add a debit card</h4>
      <form @submit.prevent="sendForm" class="flex flex-col gap-5">
        <input type="text" placeholder="Card Number" v-model="newCard.num" />
        <input type="text" placeholder="Expiry Date (MM/YY)" v-model="newCard.date" />
        <input type="text" placeholder="Card Name" v-model="newCard.name" />
      </form>
      <div class="flex justify-end items-center">
        <Gbutton type="submit" @click="sendForm"> Add Card </Gbutton>
      </div>
    </section>
  </Modal>
</template>

<style scoped>
form input {
  outline: none;
  color: #013c61;
  border-bottom: 1px solid #e6e7eb;
  padding: 12px 5px;
}
::placeholder,
label {
  font-size: 12px;
  color: #6a7e8a;
}
</style>
