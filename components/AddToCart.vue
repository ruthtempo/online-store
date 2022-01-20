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
<style>

button{
    display: flex;
    justify-content: center;
    padding:15px;
    margin-top:20px;
    margin-bottom:20px;
    font-size: 15px;
    border:none;
    border-radius:5px;
    background-color: #ffc04a;
    color:white;
    width:150px;
    cursor:pointer;
}

button:hover{
    background-color: darkgray;
}
</style>