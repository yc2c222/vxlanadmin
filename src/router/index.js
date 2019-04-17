import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import DeviceDetail from '../pages/deviceDetail/DeviceDetail'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/deviceList',
      name:'DeviceDetail',
      component:DeviceDetail
    }
  ]
})
