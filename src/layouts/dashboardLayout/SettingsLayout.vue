<script>
export default {
  name: "SettingsLayout",
  data() {
    return {
      routes: [
        { name: "Profile", path: "/settings/profile" },
        { name: "Password", path: "/settings/password" },
        { name: "Store Information", path: "/settings/store-information" },
        { name: "Billing Information", path: "/settings/billing-information" },
        { name: "Invoice History", path: "/settings/invoice-history" },
      ],
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<template>
  <main class="p-8 my-9 bg-white w-200 h-110 ml-50">
    <header
      class=" "
    >
      <nav class="flex justify-center gap-15 items-center border-b border-[#013C6133]">
        <RouterLink
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          @click="isActive(route.path)"
          class="pb-2 border-b-2 border-transparent text-[#013C61]"
          :class="{
            'border-b-[#2BDA53] font-semibold': isActive(route.path),
          }"
        >
          {{ route.name }}
        </RouterLink>
      </nav>
      <section class="w-full mt-6">
        <RouterView />
      </section>
    </header>
  </main>
</template>
