<template>
	<div class="container">
    <nav class="navbar">
      <div class="title-symbol">
        <span class="iconfont">&#xe614;</span>
      </div>
      <div class="title-title">
        <span>Vxlan Controller</span>
      </div>
      <div class="nav-item">
        <span>Topology View</span>
      </div>
      <div class="nav-item">
        <span>Tunnel List</span>
      </div>
    </nav>
	</div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar{
    /*使导航栏的位置固定，不以滚动条变化而变化*/
    display: flex;
    position: fixed;
    overflow: hidden;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 1.2rem;
    align-items: center;
    background: rgba(0,0,0,0.8);
  }

  .title-symbol{
    line-height: .8rem;
    padding-top: .1rem;
    margin-right: .1rem;
  }

  .title-symbol .iconfont{
    font-size: .8rem;
    color: #ffffff;
  }

  .title-title{
    line-height: 1rem;
    color:deepskyblue;
    font-size: .7rem;
    font-style: italic;
    margin-right: 2rem;
  }

  .nav-item{
    line-height: 1rem;
    margin-right: 1rem;
    color: #ffffff;
    padding: 0 .1rem;
    font-size: .5rem;
  }

  .nav-item:hover{
    color: lightskyblue;
    cursor: pointer;
    box-shadow: .1rem .1rem .05rem .01rem #141212;
  }
</style>
