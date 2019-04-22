<template>
  <div>
    <nav class="navbar-self">
      <div class="title-symbol">
        <span class="iconfont">&#xe60e;</span>
      </div>
      <div class="title-title">
        <span>Tunnel Config</span>
      </div>
      <router-link tag="div" to="/" class="title-back">
        <span class="iconfont">&#xe606;</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'TunnelHeader',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-self{
    /*使导航栏的位置固定，不以滚动条变化而变化*/
    display: flex;
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
    padding-top: .2rem;
    margin-right: .4rem;
    margin-left: .4rem;
  }

  .title-symbol .iconfont{
    font-size: 1rem;
    color: #ffffff;
  }

  .title-title{
    line-height: 1rem;
    color:#00e9ff;
    font-size: .7rem;
    font-style: italic;
    margin-right: 2rem;
  }

  .title-back{
    position: absolute;
    right: .5rem;
  }


  .title-back .iconfont{
    font-size: .8rem;
    color: #ffffff;
  }

  .title-back .iconfont:hover{
    transition-duration: .1s;
    font-weight: bolder;
    cursor: pointer;
    color: powderblue;
    -webkit-transition: all 0.15s linear;
    transition: all 0.15s linear;
  }

</style>
