<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="productList-container">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      section: this.$route.params.section,
    };
  },
  computed: {
    products() {
      return this.$store.getters.getSectionProducts(this.section);
    },
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
.productList-container {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
