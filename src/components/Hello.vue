<template>
<div class="wrapper">

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    // var start = async function () {
    //   try {
    //     let response = await fetch('https://mainsite-restapi.ele.me/bgs/weather/current?latitude=31.23037&longitude=121.473701');
    //     return response.json();
    //   } catch(e) {
    //     console.log("Oops, error", e);
    //   }
    // };
    // start().then(res=>{
    //   console.log(res);
    // })
    // fetch('https://mainsite-restapi.ele.me/bgs/weather/current?latitude=31.23037&longitude=121.473701')
    //   .then(res =>res.json())
    //   .then(res=>{
    //     console.log(res);
    //   })
    var resolveFetch = function(e) {
      var t = e.json();
      return e.status >= 200 && e.status < 300 ? t : t.then(Promise.reject.bind(Promise))
    };
    var weather = function(e) {
      var t = e.latitude,
					i = e.longitude;
      return fetch("https://mainsite-restapi.ele.me/bgs/weather/current?latitude=" + t + "&longitude=" + i).then(resolveFetch)
    }
    var loc={latitude:31.23037,longitude:121.473701}
    weather(loc).then(function(res) {
      console.log(res);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.wrapper {
    width: 0.466667rem;
    height: 1.6rem;
    background-color: white;
    border-bottom: 1px solid #eee;
}
</style>
