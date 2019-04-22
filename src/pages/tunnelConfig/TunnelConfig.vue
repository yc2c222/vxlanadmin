<template>
	<div>
    <tunnel-header></tunnel-header>
    <tunnel-content></tunnel-content>
	</div>
</template>

<script>
  import TunnelHeader from './components/Header'
  import TunnelContent from './components/Content'
  export default {
      name: 'TunnelConfig',
      components:{
        TunnelHeader,
        TunnelContent
      },
      data() {
          return {}
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
