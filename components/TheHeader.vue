<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="header-container">
    <div
      class="sidenav-toggle"
      role="button"
      @click="$store.dispatch('toggleSideNav')"
    >
      <IconBase icon-name="menu" strokeColor="#ffc04a"><IconBurger /></IconBase>
    </div>
    <NuxtLink to="/" class="logo">
      <img
        src="~/assets/logo.png"
        alt="PixelFashion - Clothing And Gadgets"
      />
    </NuxtLink>
    <div class="categories-nav">
      <CategoriesNav />
    </div>
    <div class="icons-menu">
      <UserStatus class="sm-screen-hide" left="-220" />
      <Favorites class="sm-screen-hide" />
      <MicroCart />
    </div>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import CategoriesNav from "~/components/CategoriesNav.vue";
import MicroCart from "~/components/MicroCart.vue";
import UserStatus from "~/components/UserStatus.vue";
import Favorites from "~/components/Favorites.vue";
import IconBase from "~/components/IconBase.vue";
import IconBurger from "~/components/icons/IconBurger.vue";

export default {
  components: {
    CategoriesNav,
    Favorites,
    IconBase,
    IconBurger,
    MicroCart,
    UserStatus,
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
.header-container {
  height: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #070762;
  font-family: "Source Code Pro", monospace;
  color: #ffc04a;
  padding: 1.8rem;
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
  height: 100px;
  display: flex;
}
@media (max-width: 1420px) {
  .header-container {
    padding: 1.8rem 1rem;
  }
  .categories-nav {
    display: none;
  }
}
.icons-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.icons-menu div {
  padding: 20px 0 20px 5px;
}
.sidenav-toggle {
  align-self: center;
  margin-right: 1rem;
  cursor: pointer;
}

@media (min-width: 1420px) {
  .sidenav-toggle {
    display: none;
  }
}
@media (min-width: 550px) {
  .sidenav-toggle {
    margin-left: 1.8rem;
  }
}

@media (max-width: 700px) {
  .sm-screen-hide {
    display: none;
  }
  .icons-menu div {
    padding: 20px 0;
    margin-left: 1rem;
  }
}

@media (max-width: 460px) {
  .logo {
    height: 64px;
    width: 200px;
  }
}

@media (max-width: 400px) {
  .icons-menu {
    margin: 0 auto 0 0;
  }
  .logo {
    margin: 0 1rem;
  }
}
</style>
