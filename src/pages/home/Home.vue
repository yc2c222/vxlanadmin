<template>
	<div>
    <home-header class="header" @changeFuncContent="changeDisplay"></home-header>
    <div class="home-body">
      <div class="device-area">
        <device-btn :deviceList="deviceList"></device-btn>
      </div>
      <div class="function-area">
        <topology-view v-show="isDisplay" :deviceList="deviceList" :tunnelList="tunnelList"></topology-view>
        <tunnel-list v-show="!isDisplay" :tableData="tunnelList" @upDateList="upDateList"></tunnel-list>
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
            deviceList:[],
            tunnelList:[]
          }
      },
    methods:{
      changeDisplay (value) {
        this.isDisplay = value === 'Topology View';
      },
      upDateList () {
        this.getTunnelList();
      },
      getDeviceInfo () {
        axios.get('/api/getinfo.php',{params:{tablename:'DeviceInfo'}})
          .then(res => {
            this.deviceList = res.data;
            //将deviceList 存入 localstorage 中
            sessionStorage.setItem('deviceList', JSON.stringify(this.deviceList));
            // console.log(JSON.parse(localStorage.getItem('deviceList'))[0]) 从localstorage中获取
          })
      },
      getTunnelList () {
        axios.get('/api/getinfo.php',{params:{tablename:'TunnleInfo'}})
          .then(res => {
            this.tunnelList = res.data;
            sessionStorage.setItem('tunnelList',JSON.stringify(this.tunnelList));
          })
      }
    },
    created () {
        this.getDeviceInfo();
        this.getTunnelList();
    },
    watch:{

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-body{
    display: flex;
  }
  .header{
    position: fixed;
    width: 100%;
    z-index: 3;
  }
  .device-area{
    /*position: fixed;*/
    width: 13%;
    margin-right: 3%;
    z-index: 2;
    margin-top: 1.1rem;
    /*overflow-y:scroll;*/
    /*max-height: 10rem;*/
  }

  .function-area{
    margin-top: 1.5rem;
    /*margin-left: 16%;*/
    width: 84%;
  }


</style>
