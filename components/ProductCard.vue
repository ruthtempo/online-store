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
        <img class="heart-icon" src="../assets/heart.svg" alt="favorites">
    </div>
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
div{
    display:flex;
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
    align-items: flex-end;
    padding:20px;
}

a{
    text-decoration: none;

}

.action-buttons{
    display:flex;
    align-items: center;
    justify-content: center;
}   

.heart-icon{
    display: flex;
    padding-left:20px;
    width:30px;
    height:30px;
}
</style>
