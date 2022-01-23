<template>
<div>
    <ProductCard v-for="product in $store.state.favorites" :key="product.id" :product="product"/>
</div>
</template>
<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components:ProductCard,

}
</script>