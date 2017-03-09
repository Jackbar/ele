<template>
  <div>
    <div >
      <div class="shop-header-container">
        <div class="shop-header-background"></div>
        <nav class="shop-header-nav"></nav>
        <div class="shop-header-main">
          <img class="shop-header-logo" src="//fuss10.elemecdn.com/7/d3/48a777a6b444dc317cc24d101220cjpeg.jpeg?imageMogr/format/webp/" alt="">
          <div class="shop-header-content">
            <h2 class="shop-heaer-shopName">肯德基宅急送（坭岗店）</h2>
            <p class="shop-header-delivery">
              <span class="shop-header-deliveryItem">商家配送</span>
              <span class="shop-header-deliveryItem">40分钟送达</span>
              <span class="shop-header-deliveryItem">配送费¥9</span>
            </p>
            <div class="shop-header-notice">
              <span>公告：</span>
              <span>本餐厅不使用饿了么配送，由肯德基宅急送官方品牌配送，会员用户无法享受免配送费服务</span>
            </div>
          </div>
          <div class="shop-header-detailIcon"></div>
        </div>
        <div class="shop-header-activities">
          <div class="activity-activityWrap activity-nowrap">
            <i class="activity-activityIcon">减</i>
            <span>满70减8(不与美食活动同享)（限在线支付）</span>
            <span>(APP专享)</span>
          </div>
          <div class="shop-header-activityCount">2个活动</div>
        </div>
      </div>
    </div>
    <div class="shop-tab-container">

    </div>
    <div class="menuview">

    </div>
  </div>
</template>

<style lang="less" scoped>
  .shop-header-container{
    position: relative;
    width: 100%;
    color: #fff;
    font-size: .293333rem;
    .shop-header-background{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #3190e8;
      background-image: url("//fuss10.elemecdn.com/7/d3/48a777a6b444dc317cc24d101220cjpeg.jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      &:before{
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        background-color: rgba(119, 103, 137, .43);
      }
    }
    .shop-header-nav{
      position: relative;
      padding: .106667rem .266667rem;
      height:.933333rem;
      &:before{
        margin-left: .266667rem;
        position: absolute;
        top: 50%;
        display: inline-block;
        width: .373333rem;
        height: .373333rem;
        line-height: .373333rem;
        border: 1px solid #fff;
        border-width: 5px 0 0 5px;
        transform: translateY(-50%) rotateZ(-45deg);
        content: "";
        color: #fff;
        font-size: .426667rem;

      }
    }
    .shop-header-main{
      position: relative;
      display: flex;
      .shop-header-logo{
        margin: 0 .266667rem;
        border: 1px solid #fff;
        border-radius: .106667rem;
        width: 1.706667rem;
        height: 1.706667rem;
      }
      .shop-header-content{
        padding-right: .133333rem;
        flex: 1;
        width: 0;//这个厉害了
        .shop-heaer-shopName{
          line-height: .466667rem;
          font-size: .466667rem;
          font-weight: 700;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .shop-header-delivery{
          height: .666667rem;
          line-height: .666667rem;
          white-space: nowrap;
          .shop-header-deliveryItem{

            &:not(:last-child):after{
              content: ' / ';
              opacity: .5;
            }
          }
        }
        .shop-header-notice{
          position: relative;
          line-height: .533333rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      .shop-header-detailIcon{
        position: absolute;
        right: .4rem;
        top: 50%;
        transform: translateY(-50%);
        &:before{
          content: '';
          display: inline-block;
          width: .266667rem;
          height: .266667rem;
          border: 1px solid #fff;
          border-width: 2px 0 0 2px;
          transform: rotateZ(135deg);
        }
      }
    }
    .shop-header-activities{
      padding: 0 .266667rem;
      position: relative;
      line-height: .8rem;
      display: flex;
      justify-content: space-between;
      .activity-activityIcon{
        font-style: normal;
        padding: .04rem;
        margin-right: .133333rem;
        font-size: .266667rem;
        background-color: rgb(240, 115, 115);
        color: rgb(255, 255, 255);
        border-color: rgb(240, 115, 115);
      }
    }


    
  }
</style>

<script lang="">
  export default {
    // Options / Data
    // data () { return {} },
    // props: [],
    // propsData: {},
    // computed: {},
    // methods: {},
    // watch: {},
    // Options / DOM
    // el () {},
    // template: '',
    // render () {},
    // Options / Lifecycle Hooks
    // beforeCreate () {},
    // created () {},
    // beforeMount () {},
    // mounted () {},
    // beforeUpdate () {},
    // updated () {},
    // activated () {},
    // deactivated () {},
    // beforeDestroy () {},
    // destroyed () {},
    // Options / Assets
    // directives: {},
    // filters: {},
    // components: {},
    // Options / Misc
    // parent: null,
    // mixins: [],
    // name: '',
    // extends: {},
    // delimiters: [ '{{', '}}' ],
    // functional: false
  }
</script>
