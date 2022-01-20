<template>
  <div class="header-container">
        <div class="sidenav-toggle" role="button" @click="$store.dispatch('toggleSideNav')">
            <svg version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                x="0px" y="0px"
	            width="35px" height="35px" 
                viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
                <path id="XMLID_101_" d="M78,23.5H14c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5h64c3.6,0,6.5,2.9,6.5,6.5S81.6,23.5,78,23.5z M84.5,46
	                c0-3.6-2.9-6.5-6.5-6.5H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,52.5,84.5,49.6,84.5,46z M84.5,75c0-3.6-2.9-6.5-6.5-6.5
	                H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,81.5,84.5,78.6,84.5,75z"/>
            </svg>
        </div>
        <img src="~/assets/logo2.png" alt="PixelFashion - Clothing And Gadgets" class="logo">
            <div class="categories-nav">
                <CategoriesNav />
            </div>
        <div class="icons-menu">
                <UserStatus />
                <Favorites/>
                <MicroCart />
        </div>
  </div>
</template>

<script>
import CategoriesNav from '~/components/CategoriesNav.vue'
import MicroCart from '~/components/MicroCart.vue'
import UserStatus from '~/components/UserStatus.vue'
import Favorites from '~/components/Favorites.vue'

export default {
    components: {
    CategoriesNav,
    MicroCart,
    UserStatus,
    Favorites
},
    created() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>

<style scoped>
.header-container {
    font-family: 'Source Code Pro', monospace;
    display: flex;
    justify-content: space-between;
    background: rgb(0,111,126);
    background: linear-gradient(354deg, rgb(44, 48, 53) 0%, rgba(7,7,98,1) 100%);
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
    display: flex;
}
@media(max-width: 1420px) {
    .header-container {
        padding: 1.8rem 1rem;
    }
    .categories-nav {
        display: none;
    }
}
.icons-menu{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}
.icons-menu div{
    padding: 20px;
}
.sidenav-toggle {
    align-self: center;
    margin-right: 1rem;
    cursor: pointer;
}

.sidenav-toggle path {
    fill: #ffc04a;
}

@media (min-width: 1420px) {
    .sidenav-toggle {
        display: none;
    }
}
</style>
