<script>
import AddNewModal from "../modals/AddNewModal.vue";
import Gbutton from "../slots/Gbutton.vue";
import Modal from "../slots/modal.vue";
import UsersTable from "./UsersTable.vue";

export default {
  name: "DashboardUsers",
  components: {
    Gbutton,
    UsersTable,
    Modal,
    AddNewModal
    
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal(){
    this.showModal = true;

    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<template>
  <main class="mt-10 mx-auto flex flex-col items-center w-300">
    <div class="w-260 flex justify-between items-center mx-auto">
      <h4 class="text-[24px] text-[#013C61] font-semibold">Employees</h4>
      <Gbutton @click="openModal">Add New</Gbutton>
    </div>

    <div
      class="w-260 flex justify-between items-center py-8 px-4 bg-white mx-auto text-[#013C61]"
    >
      <h4 class="text-[24px] font-semibold">Josh Bakery Ventures</h4>
      <p>62, Bode Thomas, Surulere, Lagos</p>
    </div>

    <section class="w-260 flex gap-50">
      <div class="w-180 flex gap-6">
        <select name="" id="" class="border px-4 border-[#6A7E8A66]">
          <option value="">Change role</option>
          <option value="">Admin</option>
          <option value="">staff</option>
        </select>
        <Gbutton>Change </Gbutton>
        <input
          type="text"
          class="border border-[#6A7E8A66] px-4 w-90 outline-none"
          placeholder="Enter staff name here..."
        />
      </div>
      <p class="flex items-center gap-2 text-[#013C61]">
        <span class="border border-[#013C611A] px-1 rounded-xs">1</span> of 2
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
    </section>

    <UsersTable />

    
    <AddNewModal v-if="showModal"  @close="closeModal"/>
  </main>
</template>

<style lang="scss" scoped></style>
