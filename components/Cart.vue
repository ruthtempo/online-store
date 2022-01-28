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
    <div v-if="$store.state.cart.length != 0" class="basket">
      <h2>MY BASKET ({{ $store.getters.getCartTotalProducts}})</h2>
      <div class="total">
        TOTAL: {{ $store.getters.getTotal }} €
      </div>
      <button  @click="emptyCart" class="confirm">
        Confirm Purchase
      </button>
      <div class="data-form">
       <h5>MY DATA</h5> 
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
  align-items: flex-start;
  justify-content: center;
  padding-left:50px;
}
img {
  height: 200px;
  width: 200px;
  padding-right: 20px;
}
.products{
  display:flex;
  flex-wrap:wrap;
  max-width:40%;
}



.basket{
  display:flex;
  margin-left:20px;
  margin-top:20px;
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
  margin: 20px;
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
  width:80%;
  font-size: 25px;
  padding: 20px;
  border-bottom: 1px solid black;
}

h4,h5{
  margin:10px;
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
  background-color: green;
}

button:hover {
  background-color: lightgrey;
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
.data-form{
  display:flex;
  width:60%;
  flex-direction: column;
  padding:10px;
  border-radius:10px;
  align-items: center;
  background-color: #ffc04a;
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
  width:400px;
  height: 20px;;
  border-radius:5px;
  border-style:none;
  margin:5px;
  padding:10px;
  font-size: 15px;
}


</style>
