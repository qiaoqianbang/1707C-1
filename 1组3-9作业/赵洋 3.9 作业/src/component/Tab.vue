<!--  -->
<template>
    <div class="box">
      <div class="left" v-for="(item,index) in list" :key="index">
        {{item.name}}
        {{item.price}}
        <button @click="rem(item)">-</button>
        {{item.count}}
        <button @click="add(item)">+</button>
      </div>
      <div>
          <h2>总数：{{count}}</h2>
          <h2>总价：{{allsum}}</h2>
      </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState(['list',"count","allsum"])
    },
    methods:{
        ...mapMutations(["add","rem"])
    },
  data () {
    return {

    };
  },
}

</script>
<style lang='scss' scoped>
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>