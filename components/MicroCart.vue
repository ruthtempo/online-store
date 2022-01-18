<template>
  <div class="microcart-wrapper">
    <div class="cart-popover-title">
      <nuxt-link to="/checkout"> 
        <img class="icon" src="../assets/cart.svg" alt="cart">
        ({{$store.state.cart.length}})
      </nuxt-link>
    </div>
    <div class="cart-popover-content">
      <h2>MY BASKET ({{$store.state.cart.length}})</h2> 
      <div v-for="item in $store.state.cart" :key="item.id" class="product-box">
            <img class="product-img" :src='item.image' alt="">
            <h3>{{item.title}}</h3>
            <h4> {{item.price}} €</h4>
            <button @click="$store.commit('removeItem', item)">
              <img class="trash" src="../assets/trash.svg" alt="">
            </button>
        </div>
        <div v-if="$store.state.cart.length != 0"> 
            <div class="total">
                Total: {{$store.getters.getTotal}} €
            </div>
            <button>
              <nuxt-link to="/checkout.vue">Buy Now</nuxt-link>
            </button>
        </div>
        <div v-else>
            <img src="../assets/cart.svg" alt="">
            <h4>Your Cart is Empty</h4>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"MicroCart"
}
</script>
<style scoped>
.microcart-wrapper{
  background-color: silver;
  max-width:300px;
  margin: 0 auto
}

.microcart-wrapper:hover .cart-popover-content{
  z-index: 10;
  opacity: 1;
  visibility: visible;
  transform: translate(0, -20px);
  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}

.cart-popover-content{
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background-color: #bfbfbf;
  right:100px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  width: auto;
}


.icon{
    height:30px;
    width:30px;
}

a{
  text-decoration: none;
  color:black;
}

.product-img{
  height:40px;
  width:40px;
}

h3, h4{
  font-size: 15px;
}

.trash{
  width: 20px;
  height:20px;
}

button{
  background-color: transparent;
}
</style>