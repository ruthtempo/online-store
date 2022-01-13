<template>
  <div class="productCard-container">
    <NuxtLink :to="`/product/${product.id}`">See Product</NuxtLink>
      <div class="image-wrapper">
          <img :src='product.image' alt="picture" class="image">
      </div>
      <div class="product-info">
          <div> {{product.title }}</div>
          <div> {{product.price}} € </div>
      </div>

  </div>
</template>

<script>
export default {
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
    width: 23%;
    border-radius: 10px;
}

.image-wrapper{
    display:flex;

    align-items: center;
    

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
}

</style>
