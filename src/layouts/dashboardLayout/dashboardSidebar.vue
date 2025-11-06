<script>
import HomeIcon from "../../assets/icons/homeIcon.vue";
import UsersIcon from "../../assets/icons/usersIcon.vue";
import CardsIcon from "../../assets/icons/cardsIcon.vue";
export default {
  name: "dashboardSidebar",
  components: {
    HomeIcon,
    UsersIcon,
    CardsIcon,
  },
  data() {
    return {
      routes: [
        { name: "Home", path: "/", icon: HomeIcon },
        { name: "Users", path: "/users", icon: UsersIcon },
        { name: "Cards", path: "/cards", icon: CardsIcon },
      ],
    };
  },
  methods: {
    isActive(path){
        return this.$route.path === path;
    }
  },
};
</script>

<template>
  <aside class="w-15 h-[calc(100vh-60px)] py-10 bg-white">
    <div class="h-[50%] flex flex-col justify-between items-center">
     
      <RouterLink v-for="route in routes" :key="route.path" :to="route.path" @click="isActive(route.path)" class="py-3 px-4 border-l-4 border-transparent" :class="{ 'border-l-[#2BDA53] ': isActive(route.path) }">
        <component class="size-6" :class="isActive(route.path) ? 'text-[#2BDA53]' : 'text-[#013C61]'" :is="route.icon" />
      </RouterLink>
    </div>
  </aside>
</template>

<style lang="scss" scoped></style>
