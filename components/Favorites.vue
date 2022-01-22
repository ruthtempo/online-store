<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <Nuxt-link to="/favorite">
    <IconBase icon-name="favorites" strokeColor="#ffc04a">
      <IconHeart/>
    </IconBase>
  </Nuxt-link>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import IconBase from "~/components/IconBase";
import IconHeart from "~/components/icons/IconHeart";
export default {
  name: "Favorites",
  components: {
    IconBase,
    IconHeart,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
