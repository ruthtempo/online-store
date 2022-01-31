<template>
  <div class="input-form">
    <div class="value-button decrease" id="decrease" @click="decreaseQuantity" >-</div>
    <input type="number" id="number" v-model.number="quantity" />
    <div class="value-button increase" id="increase" @click="quantity ++" >+</div>
 </div>
</template>

<script>
export default {
  name: "QuantityInput",
  data() {
    return {
          quantity: 1,
    }
  },
  methods: {
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity --;
      }
    }
  },
  watch: {
    quantity: function (newVal, oldVal) {
      if (newVal > 0) {
        this.$emit("onchange", newVal);
      } else {
        this.quantity = ''
        this.$emit("onchange", 0);
      }
    }
  }
}
</script>


<style scoped>
  .input-form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
}

.value-button {
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  user-select: none;
}

.value-button:hover {
  cursor: pointer;
}

.decrease {
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px 0 0 8px;
  font-size: 20px;
}

.increase {
  display:flex;
  align-items: center;
  justify-content: center;
  /* margin-left: -4px; */
  border-radius: 0 8px 8px 0;
  font-size: 20px;
}

form #input-wrap {
  margin: 0px;
  padding: 0px;
}

input#number {
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>