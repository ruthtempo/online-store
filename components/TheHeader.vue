<template>
  <div class="header-container">
        <h2 class="logo">Logo</h2>
        <nav>
            <NuxtLink 
                v-for="(category, index) in categories" 
                :key="index" 
                :to="`/${category}`"
                class="category-link">
                    {{category}}
            </NuxtLink>
        </nav>
        <div class="icons">
            <div>UserStatus</div>
            <div>Favorites</div>
            <div><nuxt-link to="/checkout">Cart</nuxt-link></div>
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
                if (!productCategoriesArray.some(element => element === product.category)) {
                    productCategoriesArray.push(product.category)
                }
            })
            return productCategoriesArray
        }
    },
    created() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>

<style scoped>

.header-container {
    display:flex;
    padding:20px;
    justify-content: space-around;
    background-color: #99990055;
    height:30%;
}
.category-link {
    text-transform: uppercase;
}

.icons{
    display:flex;
    align-items: center;
    justify-content: space-between;
}

.icons div{
    padding:20px;
}
</style>