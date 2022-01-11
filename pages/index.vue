<template>
<div>
  {{$store.state.products}}
</div>
</template>

<script>
export default {
  mounted(){
        this.$store.dispatch('fetchProducts')
    },
  data(){
    return{
      products: this.$store.state.products
    }
  }
}
</script>
  