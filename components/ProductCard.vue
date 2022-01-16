<template>
  <div class="productCard-container">
    <NuxtLink :to="`/product/${product.id}`">
      <div class="image-wrapper">
          <img :src='product.image' alt="picture" class="image">
      </div>
      <div class="product-info">
          <div> {{product.title }}</div>
          <div> {{product.price}} € </div>
      </div>
    </NuxtLink>
      <AddToCart :cartItem="product"/>
  </div>
</template>

<script>
import AddToCart from "./AddToCart.vue"
export default {
    name: "ProductCard",
    components: AddToCart,
    props: {
        product: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
.productCard-container{
    display:flex;
    flex-direction: column;
    background-color: lightgrey;
    margin: 10px;
    width: 20%;
    border-radius: 10px;
}

.image-wrapper{
    display:flex;
    align-items: center;
    padding: 20px;
    

}
.image{
    display:flex;
    height:200px;
    width:200px;
    align-self: center;

}

.product-info{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-end;
    padding:20px;
}


</style>
