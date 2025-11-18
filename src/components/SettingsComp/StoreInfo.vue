<script>
import Gbutton from "../slots/Gbutton.vue";

export default {
  components: {
    Gbutton,
  },
};
</script>
<template>
  <main class="flex justify-center pt-4">
    <div
      class="size-20 rounded-[50%] text-[#FFFFFF80] text-sm text-center py-2"
    >
    </div>

    <section class=" h-95 w-120 py-3 px-10">
      <form
        class=" flex flex-col gap-2 w-[400px]"
      >
        <section>
          <div class="flex flex-col text-[#6A7E8A]">
            <label for="businessName">Business Name</label>
            <div
              class="flex border-b border-[#E6E7EB] items-center justify-between w-full"
            >
              <input
                type="text"
                name=""
                id="businessName"
                class="text-[#013C61] text-[18px] flex-1 outline-none p-0 m-0 pb-2"
              />
            </div>
          </div>
        </section>

        <section>
          <div class="flex flex-col text-[#6A7E8A]">
            <label for="businessAddress">Business Address</label>
            <div
              class="flex border-b border-[#E6E7EB] items-center justify-between w-full"
            >
              <input
                type="text"
                name=""
                id="businessAddress"
                class="text-[#013C61] text-[18px] flex-1 outline-none p-0 m-0 pb-2"
              />
            </div>
          </div>
        </section>

        <section>
          <div class="flex flex-col text-[#6A7E8A]">
            <label for="phoneNumber">Phone Number</label>
            <div
              class="flex border-b border-[#E6E7EB] items-center justify-between w-full"
            >
              <input
                type="text"
                name=""
                id="phoneNumber"
                class="text-[#013C61] text-[18px] flex-1 outline-none p-0 m-0 pb-2 max-w-[90%]"
              />
            </div>
          </div>
        </section>
        <div class="flex justify-end mt-4">
          <Gbutton > Save Changes </Gbutton>
        </div>
      </form>
    </section>
  </main>
</template>

<style scoped>
form input {
  outline: none;
  color: #013c61;
  border-bottom: 1px solid #e6e7eb;
  /* padding: 12px 5px; */
}
::placeholder,
label {
  font-size: 12px;
  color: #6a7e8a;
}
</style>
