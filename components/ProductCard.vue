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
    <div class="action-buttons">
        <AddToCart :cartItem="product"/>
        <AddToFavorites :cartItem="product"/>
    </div>
  </div>
</template>

<script>
import AddToCart from "./AddToCart.vue"
import AddToFavorites from "./AddToFavorites.vue"
export default {
    name: "ProductCard",
    components: {
        AddToCart, 
        AddToFavorites},
    props: {
        product: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
div{
    display:flex;
    padding:10px;
}
.productCard-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    margin: 10px;
    width: 20%;
    border-radius: 10px;
}

.image-wrapper{
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    

}
.image{
    display:flex;
    height:250px;
    width:250px;
    align-self: center;

}

.product-info{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding:20px;
}

a{
    text-decoration: none;
}

:visited{
    color: blue;
}

.action-buttons{
    display:flex;
    justify-content: space-around;
}   

</style>
