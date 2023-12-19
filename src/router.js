import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  // モック画面
  { path: "/", alias: "/mock", name: "index_html", component: () => import("./components/mock/index_html") },
  { path: "/mock/zc0101", name: "Z001-ログイン", component: () => import("./components/mock/zc0101_login") },
  { path: "/mock/zc0102", name: "Z002-PW忘れ再設定", component: () => import("./components/mock/zc0102_pwsetting") },
  { path: "/mock/zc0103", name: "Z003-PW忘れ", component: () => import("./components/mock/zc0103_forgotpw") },
  { path: "/mock/zc0104", name: "Z004-忘れ再設定", component: () => import("./components/mock/zc0104_pwreset") },
  { path: "/mock/zc0301", name: "Z005-求人情報閲覧", component: () => import("./components/mock/zc0301_recruitment") },
  { path: "/mock/zc0302", name: "Z006-求人情報詳細画面", component: () => import("./components/mock/zc0302_recruitmentdetail") },
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