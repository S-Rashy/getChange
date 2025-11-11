<script>
import Gbutton from '../slots/Gbutton.vue';
import Modal from '../slots/modal.vue';

    export default {
        components: {
            Modal,
            Gbutton
        },
        data(){
            return{
                otpPage: false,
                confirmedPage:false
            }
        },
        methods:{
           showOtp(){
            this.otpPage = true;
           },
           confirmed(){
            this.confirmedPage = true,
            this.otpPage = false
           }

        }
        
    }
</script>

<template>
   <Modal> 
    <section v-show="!otpPage && !confirmedPage" class="space-y-4">
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
            <Gbutton @click="showOtp"> Credit Wallet </Gbutton>
        </div>
    </section>

    <section v-show="otpPage" class="text-center space-y-8 mt-10 relative">
            <p class="absolute bottom-45">Back</p>
            <h4 class="text-[#013C61] text-[24px] font-semibold">Kindly enter customer unique IOU code to validate their voucher</h4>
            <div class="space-x-3">
                <input type="text"class="size-8 text-center border border-[#6A7E8A80] rounded-sm">
                <input type="text"class="size-8 text-center border border-[#6A7E8A80] rounded-sm">
                <input type="text"class="size-8 text-center border border-[#6A7E8A80] rounded-sm">
                <input type="text"class="size-8 text-center border border-[#6A7E8A80] rounded-sm">
                <input type="text"class="size-8 text-center border border-[#6A7E8A80] rounded-sm">
                <input type="text"class="size-8 text-center border border-[#6A7E8A80] rounded-sm">
            </div>

            <p @click="confirmed" class="text-xs text-red-500">Error: code not associated with customer's phone number</p>

    </section>

    <section v-show="confirmedPage"  class=" flex flex-col items-center text-center gap-8 mt-10">
        <h4 class="text-[#013C61] text-[24px] font-semibold"> IOU Voucher reedemed successfully</h4>
        <img class="w-20" src="../../assets/verify.svg" alt="">
    </section>
    </Modal>
</template>



<style scoped>
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