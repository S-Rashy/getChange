import Login from "@/components/loginComps/login.vue";
import Reset from "@/components/resetComps/reset.vue";
import SignUp from "@/components/signUpComps/signUp.vue";
import DashboardLayout from "@/layouts/dashboardLayout/dashboardLayout.vue";
import DashboardHome from "@/components/dashboardComps/dashboardHome.vue";
import DashboardUsers from "@/components/dashboardComps/dashboardUsers.vue";
import DashboardWallet from "@/components/dashboardComps/dasboardWallet.vue";
import AuthLayout from "@/layouts/authLayout/authLayout.vue";

export default [
  {
    path: "/",
    component: DashboardLayout,
    name: "dashboard-page",
    meta: { requiresAuth: true },
    children: [
      { path: "", component: DashboardHome , name: "dashboardHome" },
      { path: "users", component: DashboardUsers , name: "dashboardUsers" },
      { path: "cards", component: DashboardWallet , name: "dashboardWallet" },
    ],
  },

  {
    path: "/auth",
    component: AuthLayout,
    name: "auth-page",
    meta: { requiresGuest: true },
    redirect: "/auth/login",
    children: [
      { path: "signup", component: SignUp },
      { path: "login", component: Login },
      { path: "resetPassword", component: Reset },
    ],
  },
];