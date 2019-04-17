<template>
    <div>
      <nav class="navbar-self">
        <div class="title-symbol">
          <span class="iconfont">&#xe652;</span>
        </div>
        <div class="title-title">
          <span>Device Detail</span>
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
    padding-top: .1rem;
    margin-right: .3rem;
    margin-left: .2rem;
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

</style>
