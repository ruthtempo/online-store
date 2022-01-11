<template>
  <div class="container">
        <h2>Logo</h2>
        <nav>
            <NuxtLink 
                v-for="(category, index) in categories" 
                :key="index" 
                :to="`/${category}`"
                class="category-link">
                    {{category}}
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
    computed: {
        categories() {
            const products = this.$store.state.products
            const productCategoriesArray = []
            products.forEach((product) => {
                if (!categories.some(element => element === product.category)) {
                    categories.push(product.category)
                }
            })
            return productCategoriesArray
        }
    }
}
</script>

<style scoped>
.category-link {
    text-transform: uppercase;
}
</style>