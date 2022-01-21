<template>
    <button @click="$store.commit('addToFavorites', cartItem)">
      <IconBase icon-name="favorite" strokeColor="#ffc04a"><IconHeart/></IconBase>
    </button>
</template>

<script>
import IconBase from '~/components/IconBase'
import IconHeart from '~/components/icons/IconHeart'
export default {
  name:"AddToFavorites",
  components: {
    IconBase,
    IconHeart
  },
  props: {
    cartItem:Object,
  }
}
</script>

<style scoped>
button {
  width:50px;
  height:50px;
  cursor:pointer;
  background-color: violet;
}
</style>
