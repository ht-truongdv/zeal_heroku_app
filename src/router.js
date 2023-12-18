import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  // モック画面
  { path: "/", alias: "/mock", name: "index_html", component: () => import("./components/mock/index_html") },
  { path: "/mock/Z001", name: "Z001-ログイン", component: () => import("./components/mock/Z001-ログイン") },
  { path: "/mock/Z010", name: "Z010-アンケート回答", component: () => import("./components/mock/Z010") },
  // Tutorial sample
  { path: "/tutorials/", name: "tutorial-list", component: () => import("./components/tutorial/TutorialsList") },
  { path: "/tutorials/:id", name: "tutorial-details", component: () => import("./components/tutorial/Tutorial") },
  { path: "/tutorials/add", name: "tutorial-add", component: () => import("./components/tutorial/AddTutorial") }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;