<template>
	<div>
    <el-table
      :data="filterData"
      style="width: 99%"
      >
      <!--:header-cell-style="headerCellStyle"-->
      <!--:row-style="tbodyRowStyle"-->
      <!--:cell-style="tbodyCellStyle"-->
      <el-table-column
        label="VNI"
        prop="vni"
        width="120">
      </el-table-column>
      <el-table-column
        label="VtepSrcIp"
        prop="vtepSrcIp"
        width="200">
      </el-table-column>
      <el-table-column
        label="VtepDestIp"
        prop="vtepDestIp"
        width="200">
      </el-table-column>
      <el-table-column
        label="VtepSrcPort"
        prop="vtepSrcPort"
        width="200">
      </el-table-column>
      <el-table-column
        label="VtepDestPort"
        prop="vtepDestPort"
        width="200">
      </el-table-column>
      <el-table-column
        label="SrcDeviceWan"
        prop="srcDeviceWan"
        width="200">
      </el-table-column>
      <el-table-column
        label="DestDeviceWan"
        prop="destDeviceWan"
        width="200">
      </el-table-column>
      <el-table-column
        align="center"
        width="200">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="medium"
            placeholder="Type the VNI"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">Binding</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
	</div>
</template>

<script>
    export default {
        name: 'TunnelList',
        props:{
          tableData: Array,
        },
        data() {
            return {
              search: ''
            }
        },
      methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        },
        //修改thead的单元格css
        // headerCellStyle ({row, column, rowIndex, columnIndex}) {
        //   return 'padding:0rem;font-size:.32rem;color:black'
        // },
        //修改tbody的css
        tbodyRowStyle({row, rowIndex}){

        },
        //修改tbody的单元格css
        tbodyCellStyle ({row, column, rowIndex, columnIndex}) {
          return 'padding:.2rem 0;font-size:.3rem'
        }
      },
      computed:{
        filterData () {
            return this.tableData.filter(data => !(this.search) || data.vni.toLowerCase().includes(this.search.toLowerCase()))
          }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-table{
  margin-top: .37rem;
}

/*thead中的th的css*/
.el-table >>> .el-table__header th{
  font-size: .38rem;
  padding: 0 ;
  color:rgba(0,0,0,.8);
}
/*tbody中td的css*/
.el-table >>> .el-table__body td{
  padding: .2rem 0;
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
/*tbody中button的css*/
.el-table >>> .el-table__body td button{
  box-sizing: border-box;
  width: 1.5rem;
  padding: .15rem .2rem;
  font-size: .32rem;
  background-color: #bfcbd0;
  color: rgba(0,0,0,.6);
  border: .01rem solid rgba(0,0,0,.15);
  border-radius: .1rem;
}

.el-table >>> .el-table__body td button:nth-child(1):hover{
  background-color: steelblue;
  color: #ffffff;
  font-weight: bolder;
}

.el-table >>> .el-table__body td button:nth-child(2):hover{
  background-color: #f26363;
  color: #ffffff;
  font-weight: bolder;
}



</style>
