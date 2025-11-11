<script>
import DashboardPhone from "@/layouts/dashboardLayout/dashboardPhone.vue";
import Gbutton from "@/components/slots/Gbutton.vue";
import Wbutton from "@/components/slots/Wbutton.vue";
import HomeTable from "./homeTable.vue";
import Modal from "../slots/modal.vue";
import TopUpModal from "../modals/TopUpModal.vue";
import HistoryModal from "../modals/HistoryModal.vue";

export default {
  name: "DashboardHome",
  components: {
    DashboardPhone,
    Gbutton,
    Wbutton,
    HomeTable,
    Modal,
    TopUpModal,
    HistoryModal
  },
  data() {
    return {
      showModal: false,
      showTopUp: false,
      showHistory: false,
    };
  },
  methods: {
    modalOn() {
      this.showModal = true;
    },
    topUpModal() {
      this.showModal = true;
      this.showTopUp = true;
    },
    historyModal() {
      this.showModal = true;
      this.showHistory = true;
    },
    closeModal(){
      this.showModal = false
      this.showHistory = false
      this.showTopUp = false
    }
  },
};
</script>

<template>
  <main class="flex justify-between w-300 text-[#013C61]">
    <section class="mt-10 mx-auto">
      <div
        class="bg-white p-6 rounded-sm shadow-sm w-210 flex justify-between items-center h-14 text-[#013C61]"
      >
        <div class="flex justify-between items-center w-90 font-semibold">
          <h6>Store Wallet</h6>
          <p class="text-[30px]">₦2,500</p>
        </div>
        <Gbutton class="h-8" @click="topUpModal"> Top up Wallet </Gbutton>
      </div>

      <div
        class="bg-white p-6 rounded-sm shadow-sm w-210 mt-5 flex justify-between items-center h-14 text-[#013C61]"
      >
        <div class="flex justify-between items-center w-90 font-semibold">
          <h6>Total Disbursed</h6>
          <p class="text-[30px]">₦12,000</p>
        </div>
        <Wbutton class="" @click="historyModal"> View History </Wbutton>
      </div>

      <section>
        <div class="flex justify-between mt-6 mx-4">
          <h5 class="font-semibold">Recent Activities</h5>
          <p class="flex items-center gap-2 text-[#013C61]">
            <span class="font-medium">1</span> of 8
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer hover:scale-110 transition-transform duration-150"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.94697 8.04924C0.94697 12.4947 4.55074 16.0985 8.99621 16.0985C13.4417 16.0985 17.0455 12.4947 17.0455 8.04924C17.0455 3.60377 13.4417 0 8.99621 0C4.55074 0 0.94697 3.60377 0.94697 8.04924Z"
                fill="#2BDA53"
              />
              <path
                d="M9.80131 4.82953L6.58162 8.04923L9.80131 11.2689"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer hover:scale-110 transition-transform duration-150"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.0985 8.04924C16.0985 12.4947 12.4947 16.0985 8.04924 16.0985C3.60377 16.0985 0 12.4947 0 8.04924C0 3.60377 3.60377 0 8.04924 0C12.4947 0 16.0985 3.60377 16.0985 8.04924Z"
                fill="#2BDA53"
              />
              <path
                d="M7.24414 4.82953L10.4638 8.04923L7.24414 11.2689"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </div>
        <HomeTable />
      </section>
    </section>
    <DashboardPhone />
  </main>
  
  <TopUpModal v-if="showModal && showTopUp" @close="closeModal"/> 

  <HistoryModal v-if="showModal && showHistory" @close="closeModal"/>
</template>

<style lang="scss" scoped></style>
