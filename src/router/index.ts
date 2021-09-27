import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

// function ifNotAuth(
//   to: RouteLocationNormalized,
//   from: RouteLocationNormalized,
//   next: NavigationGuardNext,
// ) {
//   if (store.state.auth.token) {
//     next(from.path);
//     return;
//   }
//   next();
// }

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
