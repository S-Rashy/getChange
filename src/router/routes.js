import Login from "@/components/loginComps/Login.vue";
import Reset from "@/components/resetComps/Reset.vue";
import SignUp from "@/components/signUpComps/SignUp.vue";
import DashboardLayout from "@/layouts/dashboardLayout/DashboardLayout.vue";
import DashboardHome from "@/components/dashboardComps/DashboardHome.vue";
import DashboardUsers from "@/components/dashboardComps/DashboardUsers.vue";
import DashboardWallet from "@/components/dashboardComps/DashboardWallet.vue";
import AuthLayout from "@/layouts/authLayout/AuthLayout.vue";
import SettingsLayout from "@/layouts/dashboardLayout/SettingsLayout.vue";
import Profile from "@/components/SettingsComp/Profile.vue";
import Password from "@/components/SettingsComp/Password.vue";
import StoreInfo from "@/components/SettingsComp/StoreInfo.vue";
import BillingInfo from "@/components/SettingsComp/BillingInfo.vue";
import InvoiceHistory from "@/components/SettingsComp/InvoiceHistory.vue";
import History from "@/components/dashboardComps/History.vue";

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
      { path: "history", component: History, name: "walletHistory" },
      {
        path: "settings",
        component: SettingsLayout,
        name: "SettingsLayout",
        redirect: "/settings/profile",
        children: [
          { path: "profile", component: Profile, name: "Profile" },
          { path: "password", component: Password, name: "Password" },
          {
            path: "store-information",
            component: StoreInfo,
            name: "Store-Info",
          },
          {
            path: "billing-information",
            component: BillingInfo,
            name: "Billing",
          },
          {
            path: "invoice-history",
            component: InvoiceHistory,
            name: "Invoice",
          },
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
