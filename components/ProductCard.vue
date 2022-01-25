<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="productCard-container">
    <NuxtLink :to="`/product/${product.id}`">
      <div class="image-wrapper">
        <img :src="product.image" alt="picture" class="image" />
      </div>
      <div class="product-info">
        <div>{{ product.title }}</div>
        <div class="price">{{ product.price }} €</div>
      </div>
    </NuxtLink>
    <div class="action-buttons">
        <AddToCart :cartItem="product"/>
        <AddToFavorites :favoriteItem="product"/>
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

.productCard-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 20%;
  border-radius: 10px;
}

.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.image {
  display: flex;
  height: 250px;
  width: 250px;
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
  color:black
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
</style>
