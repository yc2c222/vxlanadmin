import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import DeviceDetail from '../pages/deviceDetail/DeviceDetail'
import TunnelConfig from '../pages/tunnelConfig/TunnelConfig'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/deviceList/:id',
      name:'DeviceDetail',
      component:DeviceDetail
    },
    {
      path:'/tunnelConfig/:id',
      name:'TunnelConfig',
      component:TunnelConfig
    }
  ]
})
