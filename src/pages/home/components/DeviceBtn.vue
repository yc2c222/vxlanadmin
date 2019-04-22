<template>
	<div class="device-group">
    <el-dropdown trigger="click" class="el-dropdown" @command="handleCommand" v-for="item in deviceList" :key="item.id">
      <el-button type="info" class="el-btn">
        Device {{item.id}}<i class="el-icon-caret-right el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown" class="dropdown-menu">
        <el-dropdown-item class="dropdown-item" :command="[item.id,'DeviceInfo']">Device Info</el-dropdown-item>
        <el-dropdown-item class="dropdown-item" :command="[item.id,'TunnelConfig']">Tunnel Config</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
	</div>
</template>

<script>
  export default {
    props:{
      deviceList:Array
    },
    data() {
      return {

      };
    },
    methods: {
      handleCommand(id) {
        if (id[1] === 'DeviceInfo')
          this.$router.push({path:'/deviceList/'+id[0]});
        else if (id[1] === 'TunnelConfig')
          this.$router.push({path:'/tunnelConfig/'+id[0]});
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .device-group{
    display: flex;
    flex-direction: column;
    margin-top: .4rem;
  }

  .el-dropdown{
    margin-left: .1rem;
    margin-top: .3rem;
  }
  .el-btn{
    width: 2.5rem;
    padding: .2rem .32rem;
    font-size: .35rem;
    background-color: rgba(0,0,0,0.72);
    border: rgba(0,0,0,0.3);
    font-weight: 500 !important;
  }

  .el-btn:hover{
    /*color: skyblue;*/
    background-color: steelblue;
    font-weight: 600 !important;
    -webkit-transition: all 0.25s linear;
    transition: all 0.25s linear;
  }

  .dropdown-menu{
    margin-top: .05rem;
    margin-left: 1.9rem;
    padding: 0;
  }
  .dropdown-item{
    /*background-color: rgba(0,0,0,0.6);*/
    font-weight: bold;
    font-size: .32rem;
  }

  .dropdown-item:hover{
    /*background-color: rgba(0,0,0,0.7);*/
  }

</style>
