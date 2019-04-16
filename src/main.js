// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//解决移动端点击3ms延迟的问题
import fastClick from 'fastclick'
//css重置
import './assets/styles/reset.css'
//解决移动端1px问题引入的文件
import './assets/styles/border.css'
//iconfont
import './assets/styles/iconfont.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
