import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const isAuthenticated = userData?.isLoggedIn;
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "auth-page" });
  } else if (to.meta.requiresGuest && isAuthenticated) {
    next({ name: "dashboard-page" });
  } else {
    next();
  }
});

export default router;
