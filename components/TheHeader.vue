<template>
  <div class="header-container">
        <img src="~/assets/logo2.png" alt="PixelFashion - Clothing And Gadgets" class="logo">
        <nav class="categories-nav">
            <NuxtLink 
                v-for="(category, index) in categories" 
                :key="index" 
                :to="`/${category}`"
                class="category-link">
                    {{category}}
            </NuxtLink>
        </nav>
        <div class="icons-menu">
                <UserStatus />
                <Favorites/>
                <MicroCart />
        </div>
  </div>
</template>

<script>
import LogIn from '~/components/LogIn.vue'
import LogOut from '~/components/LogOut.vue'
import MicroCart from '~/components/MicroCart.vue'
import UserStatus from '~/components/UserStatus.vue'
import Favorites from '~/components/Favorites.vue'

export default {
    components: {
    LogIn,
    LogOut,
    MicroCart,
    UserStatus,
    Favorites
},
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
        },
    },
    created() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>

<style scoped>

.header-container {
    font-family: 'Source Code Pro', monospace;
    display: flex;
    justify-content: space-between;
    background: rgb(0,111,126);
    background: linear-gradient(354deg, rgb(44, 48, 53) 0%, rgba(7,7,98,1) 100%);
    color: #ffc04a;
    padding: 2rem;
}

.header-container a,
.header-container a:visited {
    text-decoration: none;
    color: white;
}

.logo {
    width: 300px;
    height: 90px;
    margin: 0 auto;
}
.categories-nav {
    display: flex;
    height: 2rem;
    align-self: flex-end;
    gap: 1.4rem;
}
.category-link {
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.4rem;
    color: white;
}

.category-link:visited {
    color: white;
}

.category-link::after {
    content: '|'
}

.category-link:last-of-type::after {
    content: '';
}

.icons-menu{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}

.icons-menu div{
    padding:20px;
}

.icon{
    height:30px;
    width:30px;
}

</style>
