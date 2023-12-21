import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import VueStarRating from 'vue-star-rating'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import router from './router'

const app = createApp(App);
app.component('star-rating', VueStarRating) 
app.use(router).mount('#app')
