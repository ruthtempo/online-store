<template>
  <div class="page">
      <TheHeader />
      <div class="main-content">
        <Nuxt />
      </div>
      <TheFooter />
  </div>
</template>
<style>
html, body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

.page {
  height: 100vh;
  display: grid;
  grid-template: auto 1fr auto / 1fr;
}

</style>
