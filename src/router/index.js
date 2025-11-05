import Login from "@/components/loginComps/login.vue";
import Reset from "@/components/resetComps/reset.vue";
import SignUp from "@/components/signUpComps/signUp.vue";
import DashboardLayout from "@/layouts/dashboardLayout/dashboardLayout.vue";
import DashboardHome from "@/components/dashboardComps/dashboardHome.vue";
import DashboardUsers from "@/components/dashboardComps/dashboardUsers.vue";
import DashboardWallet from "@/components/dashboardComps/dasboardWallet.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // { path: "/", component: SignUp },
  { path: "/signup", component: SignUp },
  { path: "/login", component: Login },
  { path: "/resetPassword", component: Reset },
  // { path: "/dashboard", component: DashboardLayout},
    {path: "/home", component: DashboardHome},
    {path: "/users", component: DashboardUsers},
    {path: "/cards", component: DashboardWallet},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
