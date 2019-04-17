<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from './pages/home/components/Header'
export default {
  name: 'App',
  components:{
    HomeHeader
  }
}
</script>

<style>

</style>
