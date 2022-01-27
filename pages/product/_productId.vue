<template>
    <div>
        <div v-if="product" class="breadcrumb">
            <Nuxt-link to="/">Home</Nuxt-link> / 
            <Nuxt-link :to="`/${product.category}`">{{product.category}}</Nuxt-link> /
            {{product.title}}
        </div>
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
            return this.$store.getters.getProduct( this.$route.params.productId);
        }
    }
}
</script>
<style scoped>
.breadcrumb{
    padding:20px;
}
.product-wrapper{
    display:flex;
    padding:30px;
    align-items:center;
}
.product-img{
    display:flex;
    height:300px;
    padding: 30px;
    margin:20px;
}

.product-details{
    display:flex;
    width:70%;
    padding-left:30px;
    flex-direction: column;
}

.action-buttons{
    display:flex;
    align-items: center;
    justify-content: space-between;
}   

p{
    line-height:1.5cm
}

a{
    text-decoration: none;
}

:visited{
    color:blue;
}
</style>