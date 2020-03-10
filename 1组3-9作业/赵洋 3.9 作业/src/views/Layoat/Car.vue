<!--  -->
<template>
    <div>
         <div class="left" v-for="(item,index) in cartList" :key="index">
        {{item.name}}
        {{item.price}}
        <button>-</button>
        {{item.count}}
        <button >+</button>
      </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {

    };
  },
   computed:{
        ...mapState(["cartList"])
    },
}

</script>

<style lang='scss' scoped>

</style>