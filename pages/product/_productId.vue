<template>
  <div>
    <div v-if="product" class="breadcrumb">
      <Nuxt-link to="/">Home</Nuxt-link> /
      <Nuxt-link :to="`/${product.category}`">{{ product.category }}</Nuxt-link>
      /
      {{ product.title }}
    </div>
    <div class="product-wrapper" v-if="product">
      <div class="product-img">
        <img :src="product.image" alt="Product photo" />
      </div>
      <div class="details-wrapper">
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">{{ product.price }} €</p>
        <div class="action-buttons">
          <AddToCart :cartItem="product" />
          <AddToFavorites :favoriteItem="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddToCart from "../../components/AddToCart.vue";
import AddToFavorites from "../../components/AddToFavorites.vue";

export default {
  components: {
    AddToCart,
    AddToFavorites,
  },
  computed: {
    product() {
      return this.$store.getters.getProduct(this.$route.params.productId);
    },
  },
};
</script>
<style scoped>
.breadcrumb {
  padding: 20px;
  text-transform: capitalize;
}
.product-wrapper {
  display: flex;
  padding: 30px;
  align-items: center;
}
.product-img {
  height: 30vh;
  margin: 20px;
}
.product-img img {
  max-width: 400px;
  height: 100%;
}
@media (max-width: 950px) {
  .product-img img {
    max-width: 340px;
  }
}
@media (max-width: 920px) {
  .breadcrumb {
    max-width: 98vw;
    padding: 20px 1rem;
  }
  .product-wrapper {
    flex-direction: column;
    max-width: 98vw;
    padding: 30px 0;
  }
  .product-img {
    margin: 0;
    padding: 0;
  }
}
@media (min-width: 1100px) {
  .product-img {
    margin-left: 8vw;
    margin-right: 2vw;
  }
}
.details-wrapper {
  display: flex;
  width: 70%;
  padding-left: 30px;
  padding-right: 10vw;
  flex-direction: column;
}
.action-buttons {
  width: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.product-description {
  line-height: 1.5rem;
  margin-bottom: 14px;
}
.product-price {
  font-size: 30px;
  padding-left: 1rem;
  margin-bottom: 14px;
}
a {
  text-decoration: none;
}
:visited {
  color: blue;
}
</style>
