<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="DeviceName"
      width="180">
    </el-table-column>
    <el-table-column
      prop="localDeviceIpList"
      label="LocalDeviceIpList"
      width="220">
    </el-table-column>
    <el-table-column
      prop="localWanList"
      label="LocalWanList"
      width="220">
    </el-table-column>
    <el-table-column
      prop="localLegalIp"
      label="LocalLegalIp"
      >
    </el-table-column>
  </el-table>
</template>
<!--tooltip-effect-->
<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
              id:0,
              deviceList:[],
              tableData: []
            }
        },
      mounted () {
        this.id = this.$route.params.id-1;
        this.deviceList = JSON.parse(sessionStorage.getItem('deviceList'));
        this.tableData.push(this.deviceList[this.id])
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
