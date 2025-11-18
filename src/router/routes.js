import Login from "@/components/loginComps/login.vue";
import Reset from "@/components/resetComps/reset.vue";
import SignUp from "@/components/signUpComps/signUp.vue";
import DashboardLayout from "@/layouts/dashboardLayout/dashboardLayout.vue";
import DashboardHome from "@/components/dashboardComps/dashboardHome.vue";
import DashboardUsers from "@/components/dashboardComps/dashboardUsers.vue";
import DashboardWallet from "@/components/dashboardComps/dasboardWallet.vue";
import AuthLayout from "@/layouts/authLayout/authLayout.vue";
import SettingsLayout from "@/layouts/dashboardLayout/SettingsLayout.vue";
import Profile from "@/components/SettingsComp/Profile.vue";
import Password from "@/components/SettingsComp/Password.vue";
import StoreInfo from "@/components/SettingsComp/StoreInfo.vue";
import BillingInfo from "@/components/SettingsComp/BillingInfo.vue";

export default [
  {
    path: "/",
    component: DashboardLayout,
    name: "dashboard-page",
    meta: { requiresAuth: true },
    children: [
      { path: "", component: DashboardHome, name: "dashboardHome" },
      { path: "users", component: DashboardUsers, name: "dashboardUsers" },
      { path: "cards", component: DashboardWallet, name: "dashboardWallet" },
      {
        path: "settings",
        component: SettingsLayout,
        name: "SettingsLayout",
        children: [
          { path: "profile", component: Profile,  name: "Profile", },
          { path: "password", component: Password, name: "Password", },
          { path: "store-information", component: StoreInfo,  name: "Store-Info" },
          { path: "billing-information", component: BillingInfo, name: "Billing",  },
          // { name: "Invoice", path: "invoice-history" },
        ],
      },
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
