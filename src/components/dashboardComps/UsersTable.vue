<script>
import DeleteModal from "../modals/DeleteModal.vue";

export default {
  components: {
    DeleteModal,
  },
  data() {
    return {
      svgColor: "none",
      showModal: false,

      users: [
        {
          firstname: "Joshua",
          lastname: "Bakare",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Admin",
        },
        {
          firstname: "Jane",
          lastname: "Clement",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Admin",
        },
        {
          firstname: "Hannah",
          lastname: "Johnson",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Admin",
        },
        {
          firstname: "John",
          lastname: "Ngoka",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Admin",
        },
        {
          firstname: "Omotayo",
          lastname: "Adeleke",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Admin",
        },
        {
          firstname: "Gloria",
          lastname: "Amadi",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Admin",
        },
      ],
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    changeFill() {
      this.svgColor = "#2BDA53";
    },
  },
};
</script>

<template>
  <table class="w-[90%] text-left text-sm mt-6">
    <thead>
      <tr class="text-[#013C61] text-xs font-light">
        <th class="py-3 px-4">FIRST NAME</th>
        <th class="py-3 px-4">LAST NAME</th>
        <th class="py-3 px-4">EMAIL</th>
        <th class="py-3 px-4">PHONE</th>
        <th class="py-3 px-4">ROLE</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="user in users" class="bg-white">
        <td class="rounded-l-md">
          <svg
            @click="changeFill"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            :fill="svgColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.600098"
              y="0.600098"
              width="13"
              height="13"
              rx="0.5"
              stroke="#6A7E8A"
              stroke-opacity="0.4"
              stroke-width="1.2"
            />
          </svg>
        </td>
        <td>{{ user.firstname }}</td>
        <td>{{ user.lastname }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.role }}</td>
        <td class="rounded-r-md">
          <svg
            @click="openModal"
            class="cursor-pointer text-[#6A7E8A] hover:text-gray-700 hover:scale-110 duration-200"
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.600098 4.75548H2.37788H16.6001"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.57793 4.75551C3.57793 4.09277 3.04067 3.55551 2.37793 3.55551V4.75551H3.57793ZM3.57793 17.2V4.75551H2.37793V17.2H3.57793ZM4.15571 17.7777C3.83661 17.7777 3.57793 17.519 3.57793 17.2H2.37793C2.37793 18.1818 3.17387 18.9777 4.15571 18.9777V17.7777ZM13.0446 17.7777H4.15571V18.9777H13.0446V17.7777ZM13.6224 17.2C13.6224 17.519 13.3637 17.7777 13.0446 17.7777V18.9777C14.0264 18.9777 14.8224 18.1818 14.8224 17.2H13.6224ZM13.6224 4.75551V17.2H14.8224V4.75551H13.6224ZM14.8224 3.55551C14.1596 3.55551 13.6224 4.09276 13.6224 4.75551H14.8224V3.55551ZM16.0224 4.75551C16.0224 4.09276 15.4851 3.55551 14.8224 3.55551V4.75551H16.0224ZM16.0224 17.2V4.75551H14.8224V17.2H16.0224ZM13.0446 20.1777C14.6892 20.1777 16.0224 18.8445 16.0224 17.2H14.8224C14.8224 18.1818 14.0264 18.9777 13.0446 18.9777V20.1777ZM4.15571 20.1777H13.0446V18.9777H4.15571V20.1777ZM1.17793 17.2C1.17793 18.8445 2.51113 20.1777 4.15571 20.1777V18.9777C3.17387 18.9777 2.37793 18.1818 2.37793 17.2H1.17793ZM1.17793 4.75551V17.2H2.37793V4.75551H1.17793ZM2.37793 3.55551C1.71519 3.55551 1.17793 4.09277 1.17793 4.75551H2.37793V3.55551ZM6.2446 2.97773C6.2446 2.65863 6.50328 2.39995 6.82237 2.39995V1.19995C5.84053 1.19995 5.0446 1.99589 5.0446 2.97773H6.2446ZM6.2446 4.75551V2.97773H5.0446V4.75551H6.2446ZM5.0446 5.95551C5.70734 5.95551 6.2446 5.41825 6.2446 4.75551H5.0446V4.75551V5.95551ZM3.8446 4.75551C3.8446 5.41825 4.38185 5.95551 5.0446 5.95551V4.75551V4.75551H3.8446ZM3.8446 2.97773V4.75551H5.0446V2.97773H3.8446ZM6.82237 -4.88758e-05C5.17779 -4.88758e-05 3.8446 1.33315 3.8446 2.97773H5.0446C5.0446 1.99589 5.84053 1.19995 6.82237 1.19995V-4.88758e-05ZM10.3779 -4.88758e-05H6.82237V1.19995H10.3779V-4.88758e-05ZM13.3557 2.97773C13.3557 1.33315 12.0225 -4.88758e-05 10.3779 -4.88758e-05V1.19995C11.3598 1.19995 12.1557 1.99589 12.1557 2.97773H13.3557ZM13.3557 4.75551V2.97773H12.1557V4.75551H13.3557ZM12.1557 5.95551C12.8184 5.95551 13.3557 5.41825 13.3557 4.75551H12.1557V4.75551V5.95551ZM10.9557 4.75551C10.9557 5.41825 11.493 5.95551 12.1557 5.95551V4.75551V4.75551H10.9557ZM10.9557 2.97773V4.75551H12.1557V2.97773H10.9557ZM10.3779 2.39995C10.697 2.39995 10.9557 2.65863 10.9557 2.97773H12.1557C12.1557 1.99589 11.3598 1.19995 10.3779 1.19995V2.39995ZM6.82237 2.39995H10.3779V1.19995H6.82237V2.39995Z"
              fill="currentColor"
            />
            <path
              d="M6.82237 9.19995V14.5333"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M10.378 9.19995V14.5333"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </td>
      </tr>
    </tbody>
  </table>
  <DeleteModal v-if="showModal" @close="closeModal" />
</template>

<style scoped>
td {
  color: #6a7e8a;
  padding: 12px 16px;
}
table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
</style>
