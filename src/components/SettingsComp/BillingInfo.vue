<script>
import Gbutton from "../slots/GButton.vue";

export default {
  components: {
    Gbutton,
  },
};
</script>

<template>
  <main class="w-120 mx-auto space-y-8">
    <h5 class="text-[#6A7E8A]">Payment Method</h5>
    <section class="space-y-3">
      <div class="text-[#013C61] flex gap-8">
        <p class="w-27">MASTERCARD</p>
        <p>**** 1234</p>
        <label for="payment" class="text-[#6A7E8A]">
          Make Primary <input type="radio" name="payment"
        /></label>
      </div>

      <div class="text-[#013C61] flex gap-8">
        <p class="w-27">VISA CARD</p>
        <p>**** 1234</p>
        <label for="payment" class="text-[#6A7E8A]">
          Make Primary <input type="radio" name="payment"
        /></label>
      </div>
    </section>

    <section class="text-[#6A7E8A] flex gap-12 mt-8">
      <p>Recurring Billing</p>
      <label for="enable" class="">
        Enable <input type="radio" name="enable"
      /></label>
      <label for="enable"> Disable <input type="radio" name="enable" /></label>
    </section>
    <div class="flex justify-end mt-8">
      <Gbutton> Save Changes </Gbutton>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
