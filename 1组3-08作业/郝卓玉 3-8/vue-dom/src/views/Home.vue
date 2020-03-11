<template>
    <div class="home">
        <div class="home-top"><span v-for="(item,index) in topList" :class="[topIndex===index?'active':'']" :key='index' @click='changeIndex(index)'>{{item}}</span></div>
        <div class="home-center">
            <div class="home-center-left">
                <div class="home-center-left-top">
                    <div v-if="one!={}" class="ite">
                        <p>{{one.id}}</p>
                        <p>{{one.name}}</p>
                        <p>{{one.num}}</p>
                    </div>
                    <!-- <div v-show="one==={}"><span>什么也没有</span></div> -->
                </div>
                <div class="home-center-left-bottom">
                    <span>{{count}}</span>
                </div>
            </div>
            <div class="home-center-right">
                <div class="home-center-right-center">
                    <div class="home-center-top">
                        <span>影片</span>
                        <span>分账票房</span>
                    </div>
                    <div :class="[index%2===0?'bac1':'bac2','item',index===oneIndex?'acc':'']" v-for="(item,index) in list" :key='index' @click="clickItem(item,index-1)">
                        <b>{{++index}}</b>
                        <span>{{item.name}}</span>
                        <span>{{item.num}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import data from '../until/data.json'
export default {
    data() {
        return {
            topList:['综合票房','分账票房'],
            topIndex:0,
            list:data.left,
            one:{},
            oneIndex:NaN,
            count:0
        }
    },
    created() {
        this.sumNum()
    },
    methods: {
        changeIndex(index){
            this.topIndex=index
            
            index===0?this.list=this.sortData(data.left):this.list=this.sortData(data.right)
            this.sumNum()
        },
        clickItem(item,index){
            this.one=item;
            this.oneIndex=index;
        },
        sumNum(){
            let arr=[];
            let sum=0;
            this.list.forEach(item=>{
                arr.push(item.num)
            })
            arr.reduce(function(pre,cur){
                return sum=pre+cur
            })
            this.count=sum
        },
        sortData(arr=[]){
            if(arr.length<=1){
                return arr
            }
            let provit=arr[0]
            let left=[];
            let right=[];
            for(let i=1;i<arr.length;i++){
                if(arr[i]<=provit){
                    left.push(arr[i])
                }else{
                    right.push(arr[i])
                }
            }
            let l=this.sortData(left);
            let r=this.sortData(right);
            return l.concat(provit).concat(r)
        }
    }
}
</script>
<style lang="scss">
    .home{
        width: 100%;
        height: 100%;
        
    }
    .home-top{
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-bottom: 1px solid #000;
        span{
            display: inline-block;
            height: 30px;
            line-height: 30px;
            width: 100px;
            border-radius: 10px;
        }
    }

    .home-center{
        width: 100%;
        height: 100%;
        .home-center-left{
            width: 40%;
            height: 100%;
            float: left;
            .home-center-left-top{
                width: 93%;
                height: 500px;
                background: #ccc;
                margin-left: 7%;
                margin-top: 10%;
                .ite{
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    p{
                        font-size: 30px;
                        margin: 60px 0;
                    }
                }
            }
            .home-center-left-bottom{
                width: 93%;
                height: 500px;
                margin-top: 10%;
                background: #ccc;
                margin-left: 7%;
                line-height: 500px;
                text-align: center;
                font-size: 50px;
            }
        }
        .home-center-right{
            width: 60%;
            height: 100%;
            float: right;
            .home-center-right-center{
                width: 90%;
                height: 100%;
                margin-left: 5%;
                margin-top: 7%;
                background: #ccc;
                .home-center-top{
                    width: 100%;
                    height: 90px;
                    line-height: 90px;
                    background: rgba($color: #000000, $alpha: 0.7);
                    span{
                        display: inline-block;
                         width: 150px;
                        text-align: center;
                        margin-right: 25px;
                        color: #fff;
                    }
                }
                .item{
                    width: 100%;
                    height: 90px;
                    line-height: 90px;
                    span{
                        display: inline-block;
                        width: 150px;
                        text-align: center;
                        margin-right: 25px;
                        color: #fff;
                    }
                }
                
            }
        }
    }
    .bac1{
        background: rgba($color: #000000, $alpha: 0.5);
        color:#fff;
    }
    .bac2{
        background: rgba($color: #000000, $alpha: 0.7);
        color:#fff;
    }
    .active{
        background: rgba($color: #000000, $alpha: 0.5);
        color:#fff;
    }
    .acc{
        background: #000;
    }
</style>