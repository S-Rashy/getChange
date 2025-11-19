<script>
import Modal from '../slots/modal.vue';
import ShortModal from '../slots/ShortModal.vue';

export default {
    components: {
    Modal,
    ShortModal
    },
    props: {
        amountInput: Number
    }

}
</script>

<template>
    <ShortModal> 
        <div class=" flex flex-col items-center text-center gap-10">
            <h4 class="text-[#013C61] text-[24px] font-semibold"> Recharge Successful</h4>
            <p class="text-[#6A7E8A] text-[18px] w-[60%] leading-8"> The transfer of NGN{{ amountInput  || 0}}.00 to 08012345678 was successful</p>
        </div>
       </ShortModal>
  
</template>


<style>

</style>