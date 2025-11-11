<script>
import Gbutton from '../slots/Gbutton.vue';
import Modal from '../slots/modal.vue';

    export default {
        components: {
            Modal,
            Gbutton
        }
        
    }
</script>

<template>
   <Modal> 
    <section class="space-y-5">
        <h4 class="text-[#013C61] text-[24px] font-medium"> Top up your store wallet  </h4>
        <form action="" class="flex flex-col gap-5">
            <input type="text" placeholder="Enter Amount">
            <input type="text" placeholder="Card Number">
            <div class="flex gap-4">
                <input type="text" placeholder="Expiry Date (MM/YY)">
                <input type="text" placeholder="CVV">
            </div>
        </form>
        <div class="flex justify-between items-center">
            <div>
                <input type="radio" id="savedDC">
                <label for="savedDC" class="ml-3">Use saved debit card</label>
            </div>
            <Gbutton> Credit Wallet </Gbutton>
        </div>
    </section>
    </Modal>
</template>



<style scoped>
input{
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