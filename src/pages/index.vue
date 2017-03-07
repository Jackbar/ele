<template>
<div class="wrapper">
  <div class="header"></div>
  <div class="foodentry-wrapper"></div>
  <h3 class="index-title">推荐商家</h3>
  <section class="shoplist" v-infinite-scroll="loadMore" infinite-scroll-disabled='busy' infinite-scroll-distance='60' infinite-scroll-immediate-check='false'>
    <shoplist :shop='item' v-for='item in shoplist'></shoplist>
  </section>

</div>
</template>

<script>
import fetchData from '../common/js/fetchData.js'
import shoplist from '../components/shoplist/index.vue'
export default {
  name: 'hello',
  data() {
    return {
      shoplist: [],
      busy: false,
      loadedComputed: false,
      offset: 0,
      limit: 20
    }
  },
  components: {
    shoplist
  },
  methods: {
    loadMore() {
      var self = this;
      if (!this.loadedComputed) {
        this.busy = true;
        fetchData.shoplist().then(res => {
          console.log(res);
          if (res.length < self.limit) {
            self.loadedComputed = true;
          }
          self.shoplist = self.shoplist.concat(res);
          self.offset += self.limit;
          self.busy = false;
        })
      }
    },
    goToShop() {

    }
  },
  created() {
    this.loadMore()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.wrapper {
    .header {
        width: 100%;
        height: 3.333333rem;
        background-color: #0096ff;
    }
    .foodentry-wrapper {
        min-height: 4.72rem;
        border-bottom: 1px solid #eee;
        background-color: #fff;
    }
    .index-title {
        margin-top: 0.266667rem;
        line-height: 0.906667rem;
        font-weight: 600;
        background-color: #fff;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        font-size: 0.4rem;
        padding-left: 0.4rem;
    }
}
</style>
