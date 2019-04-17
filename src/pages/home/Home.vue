<template>
	<div>
    <home-header class="header" @changeFuncContent="changeDisplay"></home-header>
    <div class="home-body">
      <div class="device-area">
        <device-btn :deviceList="deviceList"></device-btn>
      </div>
      <div class="function-area">
        <topology-view v-show="isDisplay"></topology-view>
        <tunnel-list v-show="!isDisplay"></tunnel-list>
      </div>
    </div>
	</div>
</template>

<script>
  import axios from 'axios'
  import HomeHeader from './components/Header'
  import TopologyView from './components/TopologyView'
  import TunnelList from './components/TunnelList'
  import DeviceBtn from './components/DeviceBtn'
  export default {
      name: 'Home',
      components:{
        HomeHeader,
        TopologyView,
        TunnelList,
        DeviceBtn
      },
      data() {
          return {
            isDisplay:true,
            deviceList:[]
          }
      },
    methods:{
      changeDisplay (value) {
        this.isDisplay = value === 'Topology View';
      },
      getDeviceInfo () {
        axios.get('/api/getinfo.php',{params:{tablename:'DeviceInfo'}})
          .then(res => {
            this.deviceList = res.data;
          })
      }
    },
    mounted () {
        this.getDeviceInfo();
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-body{
    display: flex;
  }

  .device-area{
    width: 13%;
    margin-right: 3%;
    z-index: 2;
  }

  .function-area{
    width: 84%;
  }


</style>
