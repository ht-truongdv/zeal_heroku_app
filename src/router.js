// import { createMemoryHistory, createRouter } from "vue-router";
import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/mock",
    name: "index_html",
    component: () => import("./components/mock/index_html")
  },
  // {
  //   path: "/",
  //   alias: "/tutorials",
  //   name: "tutorials",
  //   component: () => import("./components/tutorial/TutorialsList")
  // },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/tutorial/Tutorial")
  },
  {
    path: "/tutorials/add",
    name: "tutorial-add",
    component: () => import("./components/tutorial/AddTutorial")
  },
  {
    path: "/mock/Z001",
    name: "Z001-ログイン",
    component: () => import("./components/mock/Z001-ログイン")
  },
  {
    path: "/mock/Z010",
    name: "Z010-アンケート回答",
    component: () => import("./components/mock/Z010")
  }
];

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
});

export default router;