<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="productCard-container">
    <NuxtLink :to="`/product/${product.id}`">
      <div class="wrap1">
        <div class="image-wrapper" :style="{backgroundImage: `url(${product.image})`}">
          <!-- <img :src="product.image" alt="picture" class="image" /> -->
        </div>
        <div class="product-info">
          <div class="product-title">{{ product.title }}</div>
        </div>
      </div>
    </NuxtLink>
      <div class="wrap2">
          <div class="price">{{ product.price }} €</div>
          <div class="action-buttons">
            <AddToCart :cartItem="product"/>
            <AddToFavorites :favoriteItem="product"/>
          </div>
      </div>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import AddToCart from "./AddToCart.vue";
import AddToFavorites from "./AddToFavorites.vue";
export default {
  name: "ProductCard",
  components: {
    AddToCart,
    AddToFavorites,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  }
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>

.wrap1{
  display: flex;
  flex-direction: column;
}

.wrap2{
  display:flex;
  flex-direction: column;
  align-items: center;
} 

.productCard-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 20%;
  margin-top:25px;
}

.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height:200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.image {
  display: flex;
  width:100%;
  align-self: center;
}

.product-info {
  display: flex;
  line-height: 25px;
  text-align: justify;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color:black;
}

.price{
  padding-top:20px;
  font-size: 30px;
}

a {
  text-decoration: none;
}

:visited {
  color: black;
}

.action-buttons {
  display: flex;
  align-items:flex-end;
}

/*RESPONSIVE*/ 

@media (max-width: 1024px){
  .productCard-container{
    width:50%;
    display: flex;
    padding:0;
    margin-bottom:20px;
  }
  .image-wrapper{
    height:100px;
  }
  .product-info{
    flex-wrap: wrap;
  }
}

@media(max-width: 425px){
  .productCard-container{
    width:100%;
    height:auto;
    display: flex;
    padding:0;
    margin-bottom:20px;
  }
}


  @media(min-width: 2000px){
    .image-wrapper{
      height:400px;
    }
    .product-info{
      height:200px;
    }
    .product-title{
      font-size: 30px;
      line-height: 50px;
    }
    .price{
      padding-top:20px;
      font-size: 40px;
    }
  }
</style>
