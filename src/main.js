import '@/assets/css/theme.min.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/menu-sm-blue.css'
import '@/assets/css/swiper.min.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/css/style.css'
import '@/assets/css/main.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
