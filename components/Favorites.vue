<template>
    <div class="favorites-wrapper">
        <div class="favorites-popover-title">
      <Nuxt-link to="/favorite">
        <IconBase icon-name="favorites" strokeColor="#ffc04a"><IconHeart/></IconBase>
      </Nuxt-link>
        </div>
        <!-- <div class="favorites-popover-content">

        </div> -->
    </div>
</template>

<script>
import IconBase from '~/components/IconBase'
import IconHeart from '~/components/icons/IconHeart'
export default {
    name:"Favorites",
    components: {
      IconBase,
      IconHeart
    },
    computed: {
        user() {
        return this.$store.state.user
        }
    }
}
</script>

<style scoped>
.favorites-wrapper {
  background-color: transparent;
  max-width:300px;
  margin: 0 auto
}
/* .favorites-wrapper:hover .favorites-popover-content {
  z-index: 10;
  opacity: 1;
  visibility: visible;
  transform: translate(0, -20px);
  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}
.favorites-popover-content {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    background: rgb(0,111,126);
    background: linear-gradient(354deg, rgb(44, 48, 53) 0%, rgba(7,7,98,1) 100%);
    border: 2px dashed #ffc04a;
    right:100px;
    padding: 1.5rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    width: 35ch;
} */
/* a {
    text-decoration: none;
    color:white;
}
h3, h4 {
  font-size: 15px;
}
button {
  background-color: transparent;
} */
</style>
