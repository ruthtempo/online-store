<template>
    <div class="product-wrapper" v-if="product">
        <div class="product-img" > 
            <img :src='product.image' alt="the-product">
        </div>
        <div class="product-details">
            <h2>{{product.title}}</h2>
            <p>{{product.description}}</p>
            <h1>{{product.price}} €</h1>
            <div class="action-buttons">
                <AddToCart :cartItem="product"/>
                <AddToFavorites :favoriteItem="product"/>
            </div>
        </div>
    </div>
</template>
<script>
import AddToCart from "../../components/AddToCart.vue"
import AddToFavorites from "../../components/AddToFavorites.vue"

export default {
    components:{
        AddToCart,
        AddToFavorites,
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
    padding:30px;
    align-items:center;
}
.product-img{
    display:flex;
    height:300px;
    padding: 30px;
    margin:10px;
}


.action-buttons{
    display:flex;
    align-items: center;
    justify-content: space-between;
}   

p{
    line-height:1.5cm
}


</style>