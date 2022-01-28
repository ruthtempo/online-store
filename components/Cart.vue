<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="cart-wrapper">
    <div class="products">
      <div v-for="item in $store.state.cart" :key="item.id" class="product-box">
        <div>
          <img :src="item.image" alt="" />
        </div>
        <div class="product-parts">
          <div>
            <h4>{{ item.title }}</h4>
            <h5>QTY: {{item.quantity}}</h5>
            <h5>SUBTOTAL: {{ item.price }} €</h5>
          </div>
          <button class="remove-btn" @click="removeItem(item)">
            <IconBase icon-name="remove-item" strokeColor="#000000">
              <IconTrash/>
            </IconBase>
          </button>
        </div>
      </div>
    </div>
    <div v-if="$store.state.cart.length != 0"  class="payment">
      <div class="data-form">
        <h2>MY DATA</h2> 
          <form action="">
            <div class="input-section">
              <input type="text" placeholder="Name">
            </div>
            <div class="input-section">
              <input type="text" placeholder="Last Name">
            </div>
            <div class="input-section">
              <input type="text" placeholder="Email">
            </div>
            <div class="input-section">
              <input type="text" placeholder="Address">
            </div>
            <div class="input-section">
              <input type="text" placeholder="Country">
            </div>
          </form>
          <div class="payment-section">
           <h2>PAYMENT AND SHIPPING</h2>
           <div class="payment-method">
             <h4>Payment System</h4>
             <div class="payment-options">
              <input class="ratio" type="radio" id="credit">
              <label for="credit">Credit Cart</label>
             </div>
             <div class="payment-options">
              <input class="ratio" type="radio" id="credit">
              <label for="credit">Bizum</label>
             </div>
            </div>
           <div class="comments">
            <h4>Comments about the order</h4>
            <textarea name="" id=""></textarea>
           </div>
          </div>
      </div>
      <div class="basket">
        <h2>MY BASKET ({{ $store.getters.getCartTotalProducts}})</h2>
        <div class="total">
          TOTAL: {{ $store.getters.getTotal }} €
        </div>
        <div class="promotional-code">
          <h4>Promotional Code</h4>
          <input type="text" placeholder="Do you have a promo code?">
          <button>
            APPLY
          </button>
        </div>
        <button  @click="emptyCart" class="confirm">
          Confirm Purchase
        </button>
      </div>
    </div>
    <div v-else class="cart-empty">
        <h1>Your Cart is Empty</h1>
      <button>
        <nuxt-link to="index.vue">Continue Shopping</nuxt-link>
      </button>
    </div>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import IconBase from '~/components/IconBase.vue'
import IconTrash from '~/components/icons/IconTrash.vue'
export default {
  name: "Cart",
  components: {
    IconBase,
    IconTrash,
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    removeItem(item) {
      this.$store.commit('removeItem', item);
      if(this.isLoggedIn) {
        this.$store.dispatch("updateDatabaseCart");
      }
    },
    emptyCart() {
      this.$store.commit('emptyCart');
      if(this.isLoggedIn) {
        this.$store.dispatch("updateDatabaseCart");
      }
    }
  }
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
.cart-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom:20px;
}
img {
  height: 100px;
  width: 100px;
  padding-right: 20px;
}
.products{
  display:flex;
  flex-wrap:wrap;
  max-width:30%;
  max-height: 100px;
}

.basket{
  display:flex;
  margin-left:20px;
  margin-top:20px;
  padding:20px;
  flex-direction: column;
  align-items: center;
  width:50%;
  background-color: whitesmoke;
  border-radius: 10px;
}

.product-box {
  width: 90%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  background-color: whitesmoke;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
}

.product-parts{
  display:flex;
  width:70%;
  justify-content: space-between;
  padding:10px;
}

.total {
  display:flex;
  justify-content: center;
  font-size: 25px;
  padding: 20px;
  border-bottom: 1px dotted black;
}

h4,h5{
  margin:10px;
}
h2{
  color:black;
  text-shadow: 2px 2px #ffc04a;
}

/*BUTTONS*/

button {
  padding: 15px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  background-color: #ffc04a;
}

.confirm:hover{
  background-color: rgba(7, 7, 98, 1);
}

button:hover {
  background-color: lightgrey;
  color:white;
}

.remove-btn{
  display:flex;
  align-items: center;
  width:50px;
  height:50px;
  margin:5px;
}

.cart-empty{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top:200px;
  width:100%;
}

a{
  text-decoration: none;
  color:white
}

/*FORM */
.payment{
  display:flex;
}

.data-form{
  display:flex;
  width:60%;
  flex-direction: column;
  padding:20px;
  border-radius:10px;
  align-items: center;
  margin-top:20px;
  background-color: lightgrey;
}

form{
  display:flex;
  flex-direction: column;
  width:90%;
}
.input-section{
  display:flex;
  flex-direction: column;
  align-items: center;
}
input{
  display: flex;
  width:300px;
  height: 20px;;
  border-radius:5px;
  border-style:none;
  margin:5px;
  padding:10px;
  font-size: 15px;
}

.payment-section{
  display:flex;
  flex-direction: column;
  align-items: center;
}

.payment-method{
  display:flex;
  align-items: center;
  flex-direction: column;
}

.payment-options{
  display: flex;
  width:300px;
  align-items: center;
  padding:5px;
  margin:5px;
  border-radius:5px;
  background-color: whitesmoke;
}

.ratio{
  display: flex;
  width:20px;
  cursor: pointer;
}
.promotional-code{
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:15px;
  border-bottom:1px dotted black;
}

.comments{
  display: flex;
  flex-direction: column;
  align-items: center;
}

textarea{
  border-style: none;
  border-radius:10px;
  padding:5px;
  max-height: 50px;
  max-width: 300px;
}
</style>
