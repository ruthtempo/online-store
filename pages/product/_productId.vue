<template>
    <div class="product-wrapper" v-if="product">
        <div class="product-img" > 
            <img :src='product.image' alt="the-product">
        </div>
        <div class="product-details">
            <h2>{{product.title}}</h2>
            <p>{{product.description}}</p>
            <h1>{{product.price}}€</h1>
            <div class="action-buttons">
                <AddToCart :cartItem="product"/>
                <button class="icon-wrap">
                    <img class="heart-icon" src="../../assets/heart.svg" alt="">
                </button>
            </div>
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
    margin:3%;
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
    justify-content: space-around;
}   

.heart-icon{
    display: flex;
    width:30px;
    height:30px;
}

.icon-wrap{
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
    width:60px;
    height:40px;
    border-radius: 15px;
}

.icon-wrap:hover{
    background-color: tomato;
}

</style>