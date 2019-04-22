<template>
  <div class="table">
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
  </div>
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
  .table{
    margin-left: 1.5rem;
  }
  .el-table >>> .el-table__header th{
    font-size: .38rem;
    padding:.7rem 0 .5rem 0;
    color:rgba(0,0,0,.8);
  }
  /*tbody中td的css*/
  .el-table >>> .el-table__body td{
    padding: .3rem 0;
    font-size: .32rem;
  }
  /*tbody中td的hover的css*/
  .el-table >>> .el-table__body tr:hover >td{
    transition-duration: .5s;
    background-color: rgba(0,0,0,.6) !important;
    color:white;
    font-weight: bolder;
    font-size: .35rem !important;
  }



</style>
