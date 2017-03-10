<template>
  <div class="shop-tab-tab" :class="[$parent.value==id?activeClass:'']" @click="$parent.$emit('input',id)">
    <slot></slot>
  </div>
</template>

<script lang="">
  export default {
    // Options / Data
    // data () { return {} },
    props: {
      activeClass:{
        type:String,
        default:''
      },
      id:{
        type:String,
        default:''
      }
    },
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
