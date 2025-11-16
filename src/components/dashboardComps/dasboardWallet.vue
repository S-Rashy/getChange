<script>
import Gbutton from '../slots/Gbutton.vue';
import Usercards from './Usercards.vue';

export default {
  name: "DashboardWallet",
  components: {
    Usercards,
    Gbutton
  },
  data() {
    return {
     
    };
  },

};
</script>

<template>
  <main class="p-12 w-full min-h-full flex gap-25">
    <div class="w-220">
      <h4 class="text-[#013C61] text-[24px] text-semibold">Debit Cards</h4>
      <Usercards/>
    </div>

    <Gbutton> Add New</Gbutton>
      
       
  </main>
</template>

<style lang="scss" scoped></style>
