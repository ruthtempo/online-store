<template>
    <nav class="categories-container">
        <NuxtLink 
            v-for="(category, index) in categories" 
            :key="index" 
            :to="`/${category}`"
            class="category-link">
                {{category}}
        </NuxtLink>
    </nav>
</template>

<script>
export default {
    name: 'CategoriesNav',
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
}
</script>

<style scoped>
.categories-container {
    font-family: 'Source Code Pro', monospace;
    display: flex;
    height: 2rem;
    align-self: flex-end;
    gap: 1.2rem;
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
    content: '|';
}
.category-link:last-of-type::after {
    content: '';
}
@media(max-width: 1420px) {
    .categories-container {
        flex-direction: column;
    }
    .category-link {
        border-bottom: 1px solid white;
    }
    .category-link::after {
        content: '';
    }
}
</style>