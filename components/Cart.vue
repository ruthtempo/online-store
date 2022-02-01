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
            <h5>QTY: {{ item.quantity }}</h5>
            <h5>SUBTOTAL: {{ item.price }} €</h5>
          </div>
          <button class="remove-btn" @click="removeItem(item)">
            <IconBase icon-name="remove-item" strokeColor="#000000">
              <IconTrash />
            </IconBase>
          </button>
        </div>
      </div>
    </div>
    <ValidationObserver
      v-slot="{ invalid }"
      tag="div"
      v-if="$store.state.cart.length != 0"
      class="payment"
    >
      <div class="data-form">
        <h2>MY DATA</h2>
        <InputField
          class="input-field"
          type="text"
          label="First Name"
          autocomplete="on"
          veeValidateRules="required|alpha_spaces"
          v-model="buyer.firstName"
        />
        <InputField
          class="input-field"
          type="text"
          label="Last Name"
          autocomplete="on"
          veeValidateRules="required|alpha_spaces"
          v-model="buyer.lastName"
        />
        <InputField
          class="input-field"
          type="email"
          label="Email"
          autocomplete="on"
          veeValidateRules="required|email"
          v-model="buyer.email"
        />
        <InputField
          class="input-field"
          type="text"
          label="Address"
          autocomplete="on"
          veeValidateRules="required|alpha_spaces"
          v-model="buyer.address"
        />
        <InputField
          class="input-field"
          type="text"
          label="Country"
          autocomplete="on"
          veeValidateRules="required|alpha_spaces"
          v-model="buyer.country"
        />
        <div class="payment-section">
          <h2>PAYMENT AND SHIPPING</h2>
          <div class="payment-method">
            <h4>Payment System</h4>
            <div class="payment-options">
              <input class="ratio" type="radio" id="credit" name="payment" />
              <label for="credit">Credit Card</label>
            </div>
            <div class="payment-options">
              <input class="ratio" type="radio" id="bizum" name="payment" />
              <label for="bizum">Bizum</label>
            </div>
          </div>
          <div class="comments">
            <h4>Comments about the order</h4>
            <textarea
              id=""
              placeholder="Include a comment about the order, transport, schedules or others"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="basket">
        <h2>MY BASKET ({{ $store.getters.getCartTotalProducts }})</h2>
        <div class="total">TOTAL : {{ $store.getters.getTotal }} €</div>
        <div class="promotional-code">
          <h4>Promotional Code</h4>
          <input
            type="text"
            placeholder="Do you have a promo code?"
            v-model="code"
          />
          <button type="submit" @click="checkCoupon(code)">Apply</button>
        </div>
        <div v-if="value" class="final-price-wrap">
          <div>{{ couponMessage }}</div>
          <div class="final-price">{{ $store.getters.getFinalPrice }} €</div>
        </div>
        <div v-else class="error">{{ couponMessage }}</div>
        <Nuxt-link to="/confirmation">
          <button :disabled="invalid" @click="emptyCart" class="confirm">
            Confirm Purchase
          </button>
        </Nuxt-link>
      </div>
    </ValidationObserver>
    <div v-else class="cart-empty">
      <h1>Your Cart is Empty</h1>
      <nuxt-link to="/">
        <button>Continue Shopping</button>
      </nuxt-link>
    </div>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import IconBase from "~/components/IconBase.vue";
import IconTrash from "~/components/icons/IconTrash.vue";
import { ValidationObserver } from "vee-validate";

export default {
  name: "Cart",
  components: {
    IconBase,
    IconTrash,
    ValidationObserver,
  },
  data() {
    return {
      value: false,
      code: "",
      couponMessage: "",
      coupon: this.$store.state.coupon,
      buyer: {
        //if currentuser is defined ? then the value is "currentuser.firstname" else by default will be empty string
        firstName: this.$store.state.currentUser?.firstName ?? "",
        lastName: this.$store.state.currentUser?.lastName ?? "",
        email: this.$store.state.currentUser?.email ?? "",
        address: "",
        country: "",
      },
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    removeItem(item) {
      this.$store.commit("removeItem", item);
      if (this.isLoggedIn) {
        this.$store.dispatch("updateDatabaseCart");
      }
    },
    emptyCart() {
      this.$store.commit("emptyCart");
      if (this.isLoggedIn) {
        this.$store.dispatch("updateDatabaseCart");
      }
    },
    checkCoupon(input) {
      if (this.coupon.code === input) {
        this.couponMessage =
          "Great! " + this.coupon.discount + "% has been applied.";
        this.value = true;
        this.code = "";
      } else {
        this.couponMessage = "Sorry, that coupon does not exist.";
        this.value = false;
        this.code = "";
      }
    },
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
.cart-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
img {
  height: 100px;
  width: 100px;
  padding-right: 20px;
}
.products {
  display: flex;
  flex-wrap: wrap;
  max-width: 30%;
}
.basket {
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: whitesmoke;
  border-radius: 10px;
  max-height: 850px;
}
.product-box {
  width: 90%;
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
}
.product-parts {
  display: flex;
  width: 70%;
  justify-content: space-between;
  padding: 10px;
}
.total {
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding: 20px;
  border-bottom: 1px dotted black;
}
.final-price-wrap {
  display: flex;
  padding-top: 20px;
  align-items: center;
  flex-direction: column;
}
.final-price {
  display: flex;
  border-radius: 5px;
  justify-content: center;
  font-size: 25px;
  padding: 20px;
}
h4,
h5 {
  margin: 10px;
}
h2 {
  color: black;
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
button:hover {
  background-color: #f5ae3d;
}
button:active {
  background-color: #f9d086;
}
button:disabled {
  background-color: gray;
  color: #3f3f3f;
}
button:disabled:hover {
  background-color: gray;
  color: #3f3f3f;
}
.confirm:hover {
  background-color: #65b36c;
}
.remove-btn {
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 5px;
}
.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  width: 100%;
}
a {
  font-size: 1rem;
  text-decoration: none;
  color: black;
}

/*FORM */
.payment {
  display: flex;
}
.data-form {
  display: flex;
  width: 60%;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
  background-color: lightgrey;
  max-height: 850px;
  margin-left: 20px;
}
form {
  display: flex;
  flex-direction: column;
  width: 90%;
}
.input-field {
  flex-direction: column;
  padding-top: 5px;
  width: 300px;
}
input {
  display: flex;
  width: 300px;
  height: 20px;
  border-radius: 5px;
  border-style: none;
  margin: 5px;
  padding: 10px;
  font-size: 15px;
}
.payment-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.payment-method {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.payment-options {
  display: flex;
  width: 300px;
  align-items: center;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  background-color: whitesmoke;
}
.ratio {
  display: flex;
  width: 20px;
  cursor: pointer;
}
.promotional-code {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-bottom: 1px dotted black;
}
.comments {
  display: flex;
  flex-direction: column;
  align-items: center;
}
textarea {
  border-style: none;
  border-radius: 10px;
  padding: 5px;
  max-height: 80px;
  min-width: 300px;
  max-width: 300px;
}
.error {
  padding-top: 20px;
  color: red;
}
/* RESPONSIVE */

@media (max-width: 600px) {
  .cart-wrapper {
    display: flex;
    flex-direction: column;
  }
  img {
    height: 50px;
    width: 50px;
  }
  .products {
    display: flex;
    align-items: center;
    max-width: 100%;
  }
  .remove-btn {
    display: flex;
    height: 40px;
    width: 40px;
  }
  .payment {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .data-form {
    display: flex;
    width: 90%;
  }
  .basket {
    display: flex;
    width: 100%;
    padding: 0;
    margin-left: 5px;
  }
}

@media (max-width: 895px) {
  .cart-wrapper {
    display: flex;
    flex-direction: column;
  }
  img {
    height: 50px;
    width: 50px;
  }
  .products {
    display: flex;
    align-items: center;
    max-width: 100%;
  }
  .product-box {
    width: 100%;
    margin: 20px;
  }
  .payment {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .data-form {
    display: flex;
    width: 100%;
    margin: 10px;
  }
  .basket {
    display: flex;
    width: 100%;
    padding: 0;
    margin: 5px;
  }
}

@media (max-width: 1024px) {
  .cart-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .products {
    display: flex;
    align-items: center;
    max-width: 100%;
  }
  .product-box {
    width: 100%;
    margin: 20px;
  }
}
</style>
