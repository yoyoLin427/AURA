// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import 'bootstrap'
// Import css file
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// 安裝 BootstrapVue
Vue.use(BootstrapVue);
// 安裝 BootstrapVue icon components plugin (可選)
Vue.use(IconsPlugin);
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount(App)

