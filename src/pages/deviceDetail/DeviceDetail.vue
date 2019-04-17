<template>
	<div>
    <device-header></device-header>
    <device-content></device-content>
	</div>
</template>

<script>
  import DeviceHeader from './components/Header'
  import DeviceContent from './components/Content'
    export default {
      name: 'DeviceDetail',
      components:{
        DeviceHeader,
        DeviceContent
      },
        data() {
            return {

            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
