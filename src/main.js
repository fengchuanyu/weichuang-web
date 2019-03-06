import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import defaultSetting from './utils/defaultSettings'

Vue.config.productionTip = false
Vue.prototype.defaultSetting = defaultSetting;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
