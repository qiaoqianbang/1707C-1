<template>
  <div class="home">
    <div class="left">
      <div class="left-top">
        <p> {{leftData.title}} </p>
         <p v-show="isShow">{{leftData.sumMoney}}</p>
          <p v-show="!isShow">{{leftData.partMoney}}</p>
        <p> {{leftData.Moneyratio}} </p>
      </div>
      <div class="left-bottom">
        <p>今日实时{{sum}}</p>
      </div>
    </div>
    <div class="right">
      <div class="right-top">
          <div class="top-box">
            <span :class='isShow?"active":""' @click="changeActive">综合票房</span>
            <span :class='!isShow?"active":""' @click="changeActive">分账票房</span>
          </div>
      </div>
      <div class="right-bottom">
        <div class="tit">
          <span>影片</span>
          <span v-show="isShow">综合票房</span>
          <span v-show="!isShow">分账票房</span>
          <span>票房占比</span>
          <span>排片场次</span>
          <span>排片占比</span>
          <span>场均人次</span>
          <span>上座率</span>
        </div>
        <ul>
          <li v-for="item in listData" :key="item.id" @click="changeColor(item.id)">
            <span>{{item.title}} <a :class='item.isShow?"active":""'>❀</a> </span>
             <span v-show="isShow">{{item.sumMoney}}</span>
          <span v-show="!isShow">{{item.partMoney}}</span>
            <span>{{item.Moneyratio}}</span>
            <span>{{item.num}}</span>
            <span>{{item.numRatio}}</span>
            <span>{{item.pople}}</span>
             <span>{{item.set}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      isShow:true,
      listData:[],
      leftData:{},
      sum:0
    }
  },
  components: {
  },
  created() {
    this.$store.dispatch("getList")
    let list=this.$store.state.listData;
    let changeData=this.isShow
    list.sort(function(a,b){
      if(changeData){
        return a.sumMoney-b.sumMoney
      }else{
        return a.partMoney-b.partMoney
      }
      
    })
    
    this.listData=list
  },
  methods: {
    changeActive(){
      this.isShow=!this.isShow
      let changeData=this.isShow
      this.sum=0
      this.listData.forEach(item=>{
      if(changeData){
        this.sum+=item.sumMoney
      }else{
        this.sum+=item.partMoney
      }
      
    })
    },
    changeColor(id){
      this.listData.forEach(item=>{
        if(item.id===id){
          this.leftData=item
        }
      })
      this.$store.commit("changeIs",id)
    }
  },
}
</script>
<style lang="scss">
.home{
  width: 1000px;
  height: 500px;
  border: 1px solid #000;
  margin: 0 auto;
}
  .left{
    float: left;
    width: 29%;
    height: 100%;
    border-right: 1px solid #000;
    .left-top{
      width: 100%;
      height: 70%;
      border-bottom: 1px solid #000;
    }
  }
  .right{
    float: left;
    width: 70%;
    height: 100%;
    .right-top{
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .top-box{
    width: 200px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    span{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active{
      background: #555;
      color: #fff;
    }
  }
  .right-bottom{
    width: 100%;
    height: 450px;
    .tit{
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #000;
      line-height: 50px;
      display: flex;
      span{
        flex: 1;
      }
    }
    ul{
      width: 100%;
      li{
         width: 100%;
      height: 50px;
      border-bottom: 1px solid #000;
      line-height: 50px;
      display: flex;
      span{
        flex: 1;
        .active{
          color: red;
        }
      }
      }
    }
  }
  .left-top{
    line-height: 50px;
    font-size: 30px;
    font-weight:bold;
  }
</style>
