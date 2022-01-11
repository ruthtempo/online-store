<template>
  <div class="container">
      <ProductCard v-for="product in products" :key="product.id" />
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue"
export default {
    components: {
        ProductCard
    },
    data() {
        return {
            section: this.$route.params.section
        };
    },
    computed: {
        products() {
            return $store.getters.sectionProducts(section);
        }
    }
}
</script>

<style scoped>

</style>
