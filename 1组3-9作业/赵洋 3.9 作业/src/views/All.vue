<!--  -->
<template>
    <div class="box">
      <div class="main">    <router-view/></div>
      <div class="foot">
        <router-link to="/all/first">首页</router-link>
        <router-link to="/all/car">购物车</router-link>
        <router-link to="/all/my">我的</router-link>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow: auto;
  }
  .foot {
    width: 100%;
    height: 50px;
    background: #cccccc;
    text-align: center;
    line-height: 50px;
    display: flex;
    a{
      flex: 1;
      &.router-link-active{
        background: red;
        color: white;
      }
    }
  }
}
</style>