<script>
import Modal from "../slots/Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      transactions: [
        {
          id: 1,
          description: "NGN55 Airtime",
          date: "06 Aug, 2019",
          status: "Reedemed as airtime",
        },
        {
          id: 2,
          description: "SAM***G (NGN500)",
          date: "06 Aug, 2019",
          status: "Change status",
        },
        {
          id: 3,
          description: "BRM***K (NGN100)",
          date: "06 Aug, 2019",
          status: "Reedemed as voucher",
        },
        {
          id: 4,
          description: "NGN70 Airtime",
          date: "06 Aug, 2019",
          status: "Reedemed as airtime",
        },
        {
          id: 5,
          description: "NGN30 Airtime",
          date: "06 Aug, 2019",
          status: "Reedemed as airtime",
        },
      ],
    };
  },
};
</script>

<template>
  <Modal>
    <div>
      <div
        class="bg-[#2BDA53] text-white w-90 h-16 mx-auto text-center shadow-[0px_15px_30px_0px_#2BDA534D]"
      >
        <p class="text-[34px] pt-2 font-light">08012345678</p>
      </div>

      <table class="text-[13px]">
        <thead>
          <tr class="text-[#013C61] text-xs font-light text-left">
            <th>DESCRIPTION</th>
            <th>DATE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td class="text-[#6a7e8a]">{{ transaction.description }}</td>
            <td class="text-[#6a7e8a]">{{ transaction.date }}</td>
            <td class="text-[#FC001F] bg-[#FC001F1A]">
              {{ transaction.status }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Modal>
</template>

<style scoped>
td {
  padding: 2px;
  margin: 12px 26px;
}
table {
  border-collapse: separate;
  border-spacing: 15px 15px;
}
</style>
