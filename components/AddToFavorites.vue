<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
<div>
  <Nuxt-link v-if="!$store.getters.isLoggedIn" to="/sign-in">
  <div class="invalid-heart">
      <IconBase strokeColor="#ffc04a">
        <IconHeart />
      </IconBase>
  </div>
  </Nuxt-link>
  <button v-else @click="$store.dispatch('toggleFavorites', favoriteItem)">
    <div v-if="$store.getters.getFavorite(favoriteItem)">
      <IconBase>
        <IconHeartSolid/>
      </IconBase>
    </div>
    <div v-else>
      <IconBase icon-name="favorite" strokeColor="#ffc04a">
        <IconHeart/>
      </IconBase>
    </div>
  </button>
</div>

</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import IconBase from "~/components/IconBase";
import IconHeart from "~/components/icons/IconHeart";
import IconHeartSolid from "~/components/icons/IconHeartSolid";
export default {
  name: "AddToFavorites",
  components: {
    IconBase,
    IconHeart,
    IconHeartSolid
  },
  props: {
    favoriteItem: Object,
  }
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
button{
  width:50px;
  height:50px;
  cursor:pointer;
  background-color: transparent;
}

.invalid-heart{
display: flex;
align-items: center;
justify-content: center;
margin-left:10px;
}

</style>
