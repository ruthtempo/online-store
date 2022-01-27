<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="favorites-wrapper">
    <Nuxt-link to="/favorite" class="favorites-link">
      <IconBase icon-name="favorites" strokeColor="#ffc04a">
        <IconHeart/>
      </IconBase>
      <span v-if="$store.state.favorites.length > 0" class="favorites-length">{{$store.state.favorites.length}}</span>
    </Nuxt-link>
  </div>
</template>
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

<style scoped>
.favorites-wrapper {
  width: 62px;
}
.favorites-link {
  text-decoration: none;
}
.favorites-length {
  display: inline-block;
  width: 1.4rem;
  height: 1.4rem;
  font-size: .8rem;
  text-align: center;
  line-height: 1.7;
  background-color: #ffc04ae8;
  color: #070762;
  border-radius: 50%;
  transform: translate(-20px, -20px);
}

</style>
