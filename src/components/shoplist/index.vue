<template>
<section class="shoplist" v-infinite-scroll="loadMore" infinite-scroll-disabled='busy' infinite-scroll-distance='60' infinite-scroll-immediate-check='false'>
  <section class="index-container" v-for='item in shop'>
    <div class="logo-container">
      <div class="logo-main">
        <img class="logo-logo" src="//fuss10.elemecdn.com/e/17/27fa41fc2b03b1b8c2d794a5cf139jpeg.jpeg?imageMogr/format/webp/" alt="">
      </div>
    </div>
    <div class="index-main">
      <section class="index-line">
        <h3 class="index-shopname"> 汉堡王（深圳西乡魅力时代店19532）</h3>
        <div class="index-supportWrap">
          <div class="activity-activityWrap activity-nowrap">
            <i class="activity-activityIcon activity-icononly">保</i>
          </div>
          <div class="activity-activityWrap activity-nowrap">
            <i class="activity-activityIcon activity-icononly">准</i>
          </div>
        </div>
      </section>
      <section class="index-line">
        <div class="index-rateWrap">
          <span class="index-rate">4.5</span>
          <span>月售1554单</span>
        </div>
        <div class="index-deliveryWrap">
          <span class="index-iconDelivery">准时达</span>
          <span class="index-iconDelivery index-hollow">蜂鸟专送</span>
        </div>
      </section>
      <section class="index-line">
        <div class="index-moneylimit">
          <span>¥20起送</span>
          <span>配送费¥4</span>
        </div>
        <div class="index-timedistanceWrap">
          <span class="index-distanceWrap">324m</span>
          <span class="index-timeWrap">31分钟</span>
        </div>
      </section>
    </div>
  </section>
</section>
</template>

<script>
import utils from '../../common/js/utils.js'
export default {
  name: 'hello',
  props:{
    shop:{
      type:Array,
      default(){
        return []
      }
    },
    loadMore:{
      type:Function
    }
  },
  data() {
    return {

    }
  },
  methods: {

  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .shoplist{
    background-color: #fff;
    .index-container{
      display: flex;
      justify-content: space-between;
      position: relative;
      color: #666;
      font-size: .293333rem;
      border-bottom: 1px solid #eee;
      background-color: #fff;
      .logo-container{
        padding: .4rem .266667rem;
        .logo-main{
          width: 1.6rem;
          height: 1.6rem;
        }
        .logo-logo{
          width: 100%;
          height: 100%;
          border-radius: .053333rem;
        }
      }
      .index-main{
        padding: .4rem .266667rem .4rem 0;
        flex-grow: 1;
        flex-direction: column;
        .index-line{
          display: flex;
          justify-content: space-between;
          align-items: center;
          &:nth-child(2),&:nth-child(3){
            margin-top: .2rem
          }
          .index-shopname{
            font-size: .4rem;
            color: #333;
            font-weight: 700;
            line-height: .426667rem;
            max-width: 5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:before{
              content:"\54C1\724C";
              color: #52250a;
              background-color: #ffd930;
              font-size: .293333rem;
              font-weight: 700;
              vertical-align: top;
              height: .4rem;
              padding: 0 .066667rem;
              margin-right: .133333rem;

            }
          }
          .index-supportWrap{
            display: flex;
            .activity-activityWrap{
              display: flex;
              line-height: .426667rem;
            }
            .activity-activityIcon{
              font-size: .266667rem;
              font-style: normal;
              height: .346667rem;
              line-height: 1;
              padding: .04rem;
              margin-left: .066667rem;
              border: 1px solid;
              text-align: center;
              color: rgb(153, 153, 153);
              border-color: rgb(221, 221, 221);
            }
          }
          .index-rateWrap{
            display: flex;
            align-items: center;
            .index-rate{
              margin: 0 .106667rem;
              color: #ff6600;
            }
          }
          .index-deliveryWrap{
            display: flex;
            .index-iconDelivery{
              padding: 0 .053333rem;
              border: 1px solid #44a5ff;
              border-radius: .053333rem;
              color: #2395ff;
              background-color: #fff;
              font-size: .266667rem;
              line-height: .346667rem;
              &:not(:last-child){
                margin-right: .08rem;
              }
            }
            .index-hollow{
              background-color: #2395ff;
              color: #fff;
            }
          }
          .index-moneylimit{
            display: flex;
            align-items: center;
            span:nth-child(2){
              &:before{
                content: '/';
                color: #ddd;
                margin: 0 .08rem;
              }
            }
          }
          .index-timedistanceWrap{
            display: flex;
            align-items: center;
            .index-distanceWrap{
              color: #999;
            }
            .index-timeWrap{
              color: #2395ff;
              &:before{
                content: '/';
                color: #ddd;
                margin: 0 .08rem;
              }
            }
          }
        }

      }
    }
  }
</style>
