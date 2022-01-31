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
  }
  h1 {
    margin: 5.4rem 0 3.3rem;
  }
  h2 {
    margin-top: 4rem;
  }
  h1, h2{
    text-shadow:2px 2px #ffc04a;
    text-align: center;
  }
  .final-gif {
    border-radius: 10px;
  }
  @media (max-width: 500px) {
    .success-wrapper {
      width: 360px;
      margin: auto;
    }
    h1 {
      margin-top: 1.8rem;
    }
    .final-gif {
      width: 355px;
      height: auto;
    }
  }
  @media (max-width: 380px) {
    .success-wrapper {
      margin: 0;
    }
    h1 {
      margin-top: 3.4rem;
    }
    h2 {
      margin-top: 3rem;
      padding: 0 2rem;
    }
  }
</style>
