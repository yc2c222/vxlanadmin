<template>
	<div class="tunnelConfigForm">
    <el-form ref="form" :model="form" label-position="top" >
     <div class="line-group">
       <el-form-item label="VTEPSrcIP">
         <el-select v-model="form.VtepSrcIp" v-if="!inputForm1">
           <el-option value="Manually Enter"></el-option>
           <el-option v-for="item in deviceList" :value="item.localDeviceIpList" :key="item.id"></el-option>
         </el-select>
         <el-input v-model="form.VtepSrcIp" v-if="inputForm1"></el-input>
       </el-form-item>
       <el-form-item label="VTEPSrcPort">
         <el-input v-model="form.VtepSrcPort"></el-input>
       </el-form-item>
     </div>
      <div class="line-group">
        <el-form-item label="VTEPDestIP">
          <el-select v-model="form.VtepDestIp" v-if="!inputForm2">
            <el-option value="Manually Enter"></el-option>
            <el-option v-for="item in deviceList" :value="item.localDeviceIpList" :key="item.id"></el-option>
          </el-select>
          <el-input v-model="form.VtepDestIp" v-if="inputForm2"></el-input>
        </el-form-item>
        <el-form-item label="VTEPDestPort">
          <el-input v-model="form.VtepDestPort"></el-input>
        </el-form-item>
      </div>
      <div class="line-group">
        <el-form-item label="SrcDeviceWAN">
          <el-select v-model="form.SrcDeviceWan">
            <el-option value="WAN1"></el-option>
            <el-option value="WAN2"></el-option>
            <el-option value="WAN3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="DestDeviceWAN">
          <el-select v-model="form.DestDeviceWan">
            <el-option value="WAN1"></el-option>
            <el-option value="WAN2"></el-option>
            <el-option value="WAN3"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="line-group">
        <el-form-item label="Encrypt Level">
          <el-select v-model="form.Encrypt">
            <el-option value="High"></el-option>
            <el-option value="Medium"></el-option>
            <el-option value="Low"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
      </div>
    </el-form>
	</div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: 'TunnelContent',
        data() {
            return {
              deviceList:[],
              currectId:'',
              inputForm1:false,
              inputForm2:false,
              form: {
                VtepSrcIp: '',
                VtepSrcPort: 'Defult',
                VtepDestIp: '',
                VtepDestPort: 'Defult',
                SrcDeviceWan: 'WAN1',
                DestDeviceWan: 'WAN1',
                Encrypt:'High'
              }
            }
        },
      methods:{
        onSubmit () {
          let notExist = true;
          let srcip = this.form.VtepSrcIp;
          let destip = this.form.VtepDestIp;
          let tunnelList = JSON.parse(sessionStorage.getItem('tunnelList'));

          try{
            tunnelList.forEach( item => {
              if ( (item.vtepSrcIp === srcip || item.vtepSrcIp === destip) && ( item.vtepDestIp === srcip || item.vtepDestIp === destip )){
                notExist = false;
                throw new Error('This tunnel already exist !')
              }
            });
          }catch (e) {
            alert(e);
          }
          if (notExist) {
            let data = JSON.stringify(this.form);
            axios.post("/api/configTunnle.php",data, {headers: {'Content-Type': 'application/json'}}
            )
              .then(res => console.log(res.data))
          }
          }
      },
      mounted () {
        this.deviceList = JSON.parse(sessionStorage.getItem('deviceList'));
        this.currectId = this.$route.params.id-1;
        this.form.VtepSrcIp = this.deviceList[this.currectId].localDeviceIpList;
        this.form.VtepDestIp = this.deviceList[(this.currectId+1)%this.deviceList.length].localDeviceIpList;
      },
      watch:{
        'form.VtepSrcIp':function (val,oldVal) {
          if (val === 'Manually Enter' && this.inputForm1 === false)
            this.inputForm1 = true;
        },
        'form.VtepDestIp':function (val,oldVal) {
          if (val === 'Manually Enter' && this.inputForm2 ===false)
            this.inputForm2 = true;
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tunnelConfigForm{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    background: #ebebeb;
  }
  .el-form{
    margin-top: .5rem;
    width: 70%;
  }
  .el-form-item{
    display: inline-block;
    margin-right: 4rem;
    margin-left: 3rem;
  }

  .el-form >>> .el-select,.el-input{
    width: 6rem;
    font-size: .32rem;
  }
  .el-form >>> .el-input__inner{
    font-size: .32rem;
  }
  .el-form >>> .el-form-item__label{
    font-size: .35rem;
  }
  .el-form-item >>> .el-button{
    margin-top: .05rem;
    width: 3rem;
    background: rgba(0,0,0,.8);
    padding: 0.15rem 0;
    font-size: .4rem;
    font-weight: normal;
    border: white .05rem solid;
    border-radius: .2rem;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .el-form-item >>> .el-button:hover{
    background: #3b82b2;
  }

</style>
