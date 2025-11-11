<script>
export default {
  name: "TransactionTable",
  data() {
    return {
      transactions: [
        {
          id: 1,
          description: "Wallet top up",
          date: "06 Aug, 2019",
          time: "12:24PM",
          staff: "Admin",
          amount: "NGN2000.00",
        },
        {
          id: 2,
          description: "Top for 081369491**",
          date: "06 Aug, 2019",
          time: "10:44AM",
          staff: "Jane",
          amount: "NGN55.00",
        },
        {
          id: 3,
          description: "Top for 080234578**",
          date: "06 Aug, 2019",
          time: "09:14AM",
          staff: "Hannah",
          amount: "NGN400.00",
        },
        {
          id: 4,
          description: "IOU for 081478491**",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "John",
          amount: "BRM***K",
        },
        {
          id: 5,
          description: "IOU for 081359491**",
          date: "05 Aug, 2019",
          time: "11:24AM",
          staff: "Admin",
          amount: "SAM***G",
        },
        {
          id: 6,
          description: "Top for 081359491**",
          date: "04 Aug, 2019",
          time: "12:45PM",
          staff: "Jane",
          amount: "NGN105.00",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="w-full overflow-hidden">
    <table class="min-w-full text-left text-sm">
      <thead>
        <tr
          class=" text-[#013C61] text-xs font-light"
        >
          <th class="py-3 px-6">#</th>
          <th class="py-3 px-6">DESCRIPTION</th>
          <th class="py-3 px-6">DATE</th>
          <th class="py-3 px-6">TIME</th>
          <th class="py-3 px-6">STAFF</th>
          <th class="py-3 px-6">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="transaction in transactions"
          :key="transaction.id"
          class="border-b border-gray-100 bg-white hover:bg-gray-50 transition-colors rounded-sm"
        >
          <td class="rounded-l-md">{{ transaction.id }} </td>
          <td class=" cursor-pointer hover:underline"> {{ transaction.description }} </td>
          <td class="">{{ transaction.date }}</td>
          <td class="">{{ transaction.time }}</td>
          <td class="">{{ transaction.staff }}</td>
          <td class="rounded-r-md">{{ transaction.amount }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
td {
    color: #6A7E8A;
    padding: 12px 16px;
}
table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
</style>
