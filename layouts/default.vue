<template>
  <div class="page">
      <TheHeader />
      <TheSideNav />
      <Nuxt />
      <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
import TheSideNav from '~/components/TheSideNav'
export default {
    components: {
        TheHeader,
        TheSideNav,
        TheFooter
    },
    computed: {
        sidenav() {
            return this.$store.getters.getSideNavStatus
        }
    },
    watch: {
        '$route': function() {
            if (process.client && this.sidenav && window.innerWidth < 1420) {
                this.$store.dispatch('toggleSideNav')
            }
        }
    }
}
</script>

<style>
html, body {
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

.page {
  height: 100vh;
  display: grid;
  grid-template: auto 0 1fr auto / 1fr;
}

</style>
