<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="page">
    <TheHeader />
    <TheSideNav />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import TheHeader from "~/components/TheHeader";
import TheFooter from "~/components/TheFooter";
import TheSideNav from "~/components/TheSideNav";
export default {
  components: {
    TheHeader,
    TheSideNav,
    TheFooter,
  },
  computed: {
    sidenav() {
      return this.$store.getters.getSideNavStatus;
    },
  },
  watch: {
    $route: function () {
      if (process.client && this.sidenav && window.innerWidth < 1420) {
        this.$store.dispatch("toggleSideNav");
      }
    },
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style>
html,
body {
  box-sizing: border-box;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: "Montserrat", sans-serif;
}

.page {
  height: 100vh;
  display: grid;
  grid-template: auto 0 1fr auto / 1fr;
}

button {
  width: 150px;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #ffc04a;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: black;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #f5ae3d;
}

button:active {
  background-color: #f9d086;
}

</style>
