<script>
import Gbutton from "../slots/GButton.vue";
import Modal from "../slots/Modal.vue";

export default {
  components: {
    Modal,
    Gbutton,
  },
  emits: ["send-form"],
  data() {
    return {
      newCard: { num: "", name: "", date: "" },
      errorMsg: "",
    };
  },
  methods: {
    onlyNumbers() {
      this.newCard.num = this.newCard.num.replace(/\D/g, "");
      this.errorMsg = "";
    },
    sendForm() {
      if (this.newCard.num.length < 16) {
        this.errorMsg = "Card number must be 16 digits.";
        return;
      }
      if (!this.newCard.name.trim() || this.newCard.name.length < 3) {
        this.errorMsg = "Enter a valid card name.";
        return;
      }
      this.errorMsg = "";
      this.$emit("send-form", { ...this.newCard });
      this.newCard = { num: "", name: "", date: "" };
    },
    showError(msg) {
      this.errorMsg = msg;
      setTimeout(() => {}, 3000);
    },
  },
};
</script>

<template>
  <Modal>
    <section class="space-y-4">
      <h4 class="text-[#013C61] text-[24px] font-medium">Add a debit card</h4>
      <form @submit.prevent="sendForm" class="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Card Number"
          v-model="newCard.num"
          @input="onlyNumbers"
          minlength="16"
          maxlength="16"
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          v-model="newCard.date"
          maxlength="5"
          @input="errorMsg = ''"
          ;
        />
        <input
          type="text"
          placeholder="Card Name"
          v-model="newCard.name"
          @input="errorMsg = ''"
          ;
        />
      </form>
      <p v-if="errorMsg" class="text-xs text-red-500">{{ errorMsg }}</p>

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
