<template>
    <div class="product-wrapper" v-if="product">
        <div class="product-img" > 
            <img :src='product.image' alt="the-product">
        </div>
        <div class="product-details">
            <h2>{{product.title}}</h2>
            <p>{{product.description}}</p>
            <h1>{{product.price}}</h1>
            <AddToCart :cartItem="product"/>
            <button class="icon-wrap">
               <img class="icon" src="../../assets/heart.svg" alt="">
            </button>
        </div>
    </div>
</template>
<script>
import AddToCart from "../../components/AddToCart.vue"

export default {
    components:{
        AddToCart
    },
     computed: {
        product() {
            console.log( typeof this.$route.params.productId)
            return this.$store.getters.getProduct( this.$route.params.productId);
        }
    }
}
</script>
<style scoped>
.product-wrapper{
    display:flex;
}
.product-img{
    display:flex;
    height:300px;
    margin:10px;
}

.icon{
    width:30px;
    height:30px;
}

.icon-wrap{
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
    width:40px;
    height:40px;
    border-radius: 50%;
}

.icon-wrap:hover{
    background-color: red;
}

</style>