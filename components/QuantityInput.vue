<template>
  <div class="input-form">
    <div class="value-button" id="decrease" @click="decrease" >-</div>
    <input type="number" id="number" :value="quantity" />
    <div class="value-button" id="increase" @click="increase" >+</div>
 </div>
</template>

<script>
export default {
  name: "QuantityInput",
  props:{
    quantity:Number,
  }, 
  methods:{
    increase(){
      this.$emit("onchange", this.quantity +1)
    }, 
    decrease(){
      this.$emit("onchange",this.quantity > 1? this.quantity -1 : value)
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

form #decrease {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
}

form #increase {
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
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