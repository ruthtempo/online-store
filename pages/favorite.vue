<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
<div class="favorite-page">
  <div class="favorite-title"><h1 >MY FAVORITES</h1></div>
  <div class="fav-wrapper" v-if="$store.state.favorites.length != 0" >
      <ProductCard v-for="product in $store.state.favorites" :key="product.id" :product="product"/>
  </div>
  <div v-else  class="empty-fav">
    <p>You have no Favorite Items Yet</p>
  </div>
</div>
</template>
<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components:ProductCard,
  middleware({store, redirect}){
    if(!store.getters.isLoggedIn){
      return redirect('/sign-up')
    }
  }
}
</script>
<style scoped>
  .favorite-page{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

  .favorite-title{
    display:flex;
    justify-content: center;
    color:blue;
    width:100%;
    background-color: #ffc04a;

  }
</style>