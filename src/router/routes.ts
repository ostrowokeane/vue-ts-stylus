import EmptyRouter from "@/components/EmptyRouter.vue";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: EmptyRouter,
    children: [
      {
        path: "",
        name: "home-map",
        component: import("@/pages/index.vue"),
      },
    ],
  },
];
export default routes;
