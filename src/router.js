import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  // モック画面
  { path: "/", alias: "/mock", name: "index_html", component: () => import("./components/mock/index_html") },
  { path: "/mock/zc0101", name: "ログイン", component: () => import("./components/mock/zc0101_login") },
  { path: "/mock/zc0102", name: "PW忘れ再設定", component: () => import("./components/mock/zc0102_pwsetting") },
  { path: "/mock/zc0103", name: "PW忘れ", component: () => import("./components/mock/zc0103_forgotpw") },
  { path: "/mock/zc0104", name: "忘れ再設定", component: () => import("./components/mock/zc0104_pwreset") },

  { path: "/mock/zc0201", name: "アンケート回答 入力", component: () => import("./components/mock/zc0201_enquete") },
  { path: "/mock/zc0202", name: "アンケート回答 内容確認・完了", component: () => import("./components/mock/zc0202_complete") },

  { path: "/mock/zc0301", name: "求人情報閲覧", component: () => import("./components/mock/zc0301_recruitment") },
  { path: "/mock/zc0302", name: "求人情報詳細画面", component: () => import("./components/mock/zc0302_recruitmentdetail") },
  { path: "/mock/zc0303", name: "説明会開催日程　選択画面", component: () => import("./components/mock/zc0303_schedule") },
  { path: "/mock/zc0304", name: "説明会開催日程　確認・完了", component: () => import("./components/mock/zc0304_finish.vue") },
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