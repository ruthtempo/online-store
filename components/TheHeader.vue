<template>
  <div class="container">
        <h2>Logo</h2>
        <nav>
            <NuxtLink 
                v-for="(number, index) in test" 
                :key="index" 
                :to="`/${number}`">
                    test {{number}}
            </NuxtLink>
        </nav>
        <div>
            <div>UserStatus</div>
            <div>Favorite</div>
            <div>Cart</div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            test: [1,2,3,4] // (-> store.state.sections)
        }
    }
}
</script>

<style scoped>

</style>