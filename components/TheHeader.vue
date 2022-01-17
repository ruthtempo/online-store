<template>
  <div class="header-container">
        <h2>Logo</h2>
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
            <div>Favorite</div>
            <div>Cart</div>
        </div>
  </div>
</template>

<script>
import LogIn from '~/components/LogIn.vue'
import LogOut from '~/components/LogOut.vue'
export default {
    components: {
        LogIn,
        LogOut
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
    display: flex;
    justify-content: space-between;
    background-color: #99990055;
    height:30%;
    padding: 2rem;
}

.categories-nav {
    display: flex;
    height: 2rem;
    align-self: flex-end;
    gap: 1rem;
}
.category-link {
    display: inline-block;
    text-transform: uppercase;
}

.user-status {
    width: 35ch;
}
</style>