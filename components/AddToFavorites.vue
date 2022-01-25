<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <button @click="$store.dispatch('toggleFavorites', favoriteItem)">
    <div v-if="$store.getters.getFavorite(favoriteItem)">
      <IconHeartFilled/>
    </div>
    <div v-else>
      <IconBase icon-name="favorite" strokeColor="#ffc04a">
        <IconHeart/>
      </IconBase>
    </div>
  </button>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import IconBase from "~/components/IconBase";
import IconHeart from "~/components/icons/IconHeart";
import IconHeartFilled from "~/components/icons/IconHeartFilled";
export default {
  name: "AddToFavorites",
  components: {
    IconBase,
    IconHeart,
    IconHeartFilled
  },
  props: {
    favoriteItem: Object,
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
button{
  display: flex;
  width:50px;
  height:50px;
  cursor:pointer;
  background-color: transparent;
}
</style>
