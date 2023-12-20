<template>
  <ul class="pt-4">
    <li><router-link to="/mock/zc0101"><i class="pr-2">zc0101</i>ログイン（login）</router-link></li>
    <li><router-link to="/mock/zc0102"><i class="pr-2">zc0102</i>初期PW設定／PW再設定（pwsetting）</router-link></li>
  </ul>
  <ul class="pt-4">
    <li><router-link to="/mock/zc0201"><i class="pr-2">zc0201</i>アンケート回答（enquete）</router-link></li>
  </ul>
  <ul class="pt-4">
    <li><router-link to="/mock/zc0301"><i class="pr-2">zc0301</i>求人情報閲覧（recruitment）</router-link></li>
  </ul>
  <ul class="pt-4">
    <li><a @click="sendEmail">send Email</a></li>
  </ul>
</template>
<script>
import TutorialDataService from "../../services/TutorialDataService";
export default {
  name: "index-tesx",
  data() {
    return {
      data: {}
    }
  },
  methods: {
    sendEmail(){
      TutorialDataService.sendEmail()
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>