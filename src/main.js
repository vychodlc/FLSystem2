import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
import "echarts-liquidfill"

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
