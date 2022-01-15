<template>
<button @click="addToCart">Add To Cart</button>
    
</template>
<script>
export default {
    name:"AddToCart",
    props:{
        cartItem:Object
    },
    methods:{
        addToCart(){
            this.$store.commit("addToCart", this.cartItem)
            console.log(this.$store.state.cart)
        }
    }
}
</script>