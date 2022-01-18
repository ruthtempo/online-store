<template>
  <div class="header-container">
        <img src="~/assets/logo.png" alt="PixelFashion - Clothing And Gadgets">
        <nav class="categories-nav">
            <NuxtLink 
                v-for="(category, index) in categories" 
                :key="index" 
                :to="`/${category}`"
                class="category-link">
                    {{category}}
            </NuxtLink>
        </nav>
        <div>
            <div class="user-status">
                {{user ? `You're logged in (${user.email})` : "You're not logged in" }}
                <div v-if="!user" class="user-not-logged-in">
                    <LogIn />
                    <p>Don't have an account? <NuxtLink to="/sign-in">Sign In</NuxtLink></p>
                </div>
                <LogOut v-if="user"/>
            </div>
        </div>
        <div class="icons-menu">
            <div><img class="icon" src="../assets/user.svg" alt=""></div>
            <div><img class="icon" src="../assets/heart.svg" alt="favorites"></div>
            <div>
                <MicroCart />
            </div>
        </div>
  </div>
</template>

<script>
import LogIn from '~/components/LogIn.vue'
import LogOut from '~/components/LogOut.vue'
import MicroCart from '~/components/MicroCart.vue'

export default {
    components: {
        LogIn,
        LogOut,
        MicroCart
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
        user() {
            return this.$store.state.user
        }
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
    height:30%;
    padding: 2rem;
}

.header-container a,
.header-container a:visited {
    text-decoration: none;
    color: white;
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

.user-status {
    width: 35ch;
}

.icons-menu{
    display:flex;
    align-items: center;
    justify-content: space-between;
}

.icons-menu div{
    padding:20px;
}

.icon{
    height:30px;
    width:30px;
}

</style>
