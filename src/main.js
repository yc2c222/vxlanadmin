// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//解决移动端点击3ms延迟的问题
import fastClick from 'fastclick'
// //bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// //jquery
// import $ from 'jquery'
//css重置
import './assets/styles/reset.css'
//解决移动端1px问题引入的文件
import './assets/styles/border.css'
//iconfont
import './assets/styles/iconfont.css'
//引入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
//jquery-confirm
import 'jquery-confirm/css/jquery-confirm.css'
import 'jquery-confirm/dist/jquery-confirm.min.css'
import 'jquery-confirm/dist/jquery-confirm.min'
//

Vue.use(ElementUI);
Vue.config.productionTip = false;
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
