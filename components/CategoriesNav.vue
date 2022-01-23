<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <nav class="categories-container">
    <NuxtLink
      v-for="(category, index) in categories"
      :key="index"
      :to="`/${category}`"
      class="category-link"
    >
      {{ category }}
    </NuxtLink>
  </nav>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
export default {
  name: "CategoriesNav",
  computed: {
    categories() {
      const products = this.$store.state.products;
      const productCategoriesArray = [];
      products.forEach((product) => {
        if (
          !productCategoriesArray.some(
            (element) => element === product.category
          )
        ) {
          productCategoriesArray.push(product.category);
        }
      });
      return productCategoriesArray;
    },
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
.categories-container {
  height: 2rem;
  display: flex;
  align-self: flex-end;
  gap: 1.2rem;
  font-family: "Source Code Pro", monospace;
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
  content: "|";
}
.category-link:last-of-type::after {
  content: "";
}
@media (max-width: 1420px) {
  .categories-container {
    flex-direction: column;
  }
  .category-link {
    border-bottom: 1px solid white;
  }
  .category-link::after {
    content: "";
  }
}
</style>
