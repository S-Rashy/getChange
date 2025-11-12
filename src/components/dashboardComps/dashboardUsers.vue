<script>
import Gbutton from '../slots/Gbutton.vue';

export default {
  name: "DashboardUsers",
  components: {
    Gbutton
  },
};
</script>

<template>
  <main class="mt-10 mx-auto flex flex-col items-center w-300">
    <div class="w-260 flex justify-between items-center mx-auto ">
      <h4 class="text-[24px] text-[#013C61] font-semibold">Employees</h4>
      <Gbutton>Add New</Gbutton>
    </div>

    <div class="w-260 flex justify-between items-center py-8 px-4 bg-white mx-auto text-[#013C61]">
      <h4 class="text-[24px] font-semibold">Josh Bakery Ventures</h4>
      <p>62, Bode Thomas, Surulere, Lagos</p>
    </div>

    <div>
      <select name="" id="">
        <option value=""> 1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
