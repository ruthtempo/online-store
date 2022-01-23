<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
<div class="fav-wrapper" v-if="$store.state.favorites.length != 0" >
    <ProductCard v-for="product in $store.state.favorites" :key="product.id" :product="product"/>
</div>
<div v-else  class="empty-fav">
  <p>You have no Favorite Items Yet</p>
</div>
</template>
<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components:ProductCard,

}
</script>
<style scoped>
  .fav-wrapper{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .empty-fav{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }
</style>