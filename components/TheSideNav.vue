<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="sidenav-container">
    <div
      v-if="sidenav"
      class="backdrop"
      @click="$store.dispatch('toggleSideNav')"
    ></div>
    <transition name="slide-side">
      <div v-if="sidenav" class="sidenav">
        <div class="sm-screen-only">
          <UserStatus left="-70" top="45" />
          <Favorites />
        </div>
        <CategoriesNav />
      </div>
    </transition>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import CategoriesNav from "~/components/CategoriesNav";
import UserStatus from "~/components/UserStatus";
import Favorites from "~/components/Favorites";
export default {
  components: {
    CategoriesNav,
    UserStatus,
    Favorites,
  },
  computed: {
    sidenav() {
      return this.$store.getters.getSideNavStatus;
    },
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}
.sidenav {
  font-family: "Source Code Pro", monospace;
  height: 100%;
  width: 320px;
  background: rgb(0, 111, 126);
  background: linear-gradient(rgba(7, 7, 98, 1) 0%, rgb(7, 7, 70) 100%);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.sm-screen-only {
  display: flex;
  margin-bottom: 2rem;
}

@media (min-width: 700px) {
  .sm-screen-only {
    display: none;
  }
}
</style>
