<template>
  <div class="success-wrapper">
    <h1>PAYMENT SUCCESSFUL</h1>
    <img src="~/assets/success.gif" alt="" class="final-gif">
    <h2>Thank you for shopping with us! </h2> 
  </div>
</template>
<style scoped>
  .success-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  h1 {
    margin-bottom: 0;
  }
  h2 {
    margin-top: 0;
  }
  h1, h2{
    text-shadow:2px 2px #ffc04a;
  }
  .final-gif {
    border-radius: 10px;
  }
</style>
