<style>
  @import './assets/css/style.css';
</style>

<template>
  <div id="app">
    <div class="l-wrapper">
        <header class="l-header">
            <div class="logo"><a href="/"><img src="./assets/img/header_logo.png" alt="logo"/></a></div>
            <div class="right-menu">
                <a href="#" class="hospital-button right-header-button">
                    <i class="bi bi-person-circle"></i>
                    <p>山本太郎</p>
                </a>
                <router-link to="/mock/zc0101" class="logout-button right-header-button">
                  <i class="bi bi-box-arrow-right"></i>
                  <p>ログアウト</p>
                </router-link>
            </div>
        </header>
        <div class="container mt-3">
          <router-view />
        </div>
        <footer class="l-footer fixed-bottom">
            <p class="copyright">&copy;copyright</p>
        </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>