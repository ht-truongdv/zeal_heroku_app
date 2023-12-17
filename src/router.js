// import { createMemoryHistory, createRouter } from "vue-router";
import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/tutorial/TutorialsList")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/tutorial/Tutorial")
  },
  {
    path: "/tutorials/add",
    name: "tutorial-add",
    component: () => import("./components/tutorial/AddTutorial")
  }
];

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
});

export default router;