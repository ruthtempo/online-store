<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="footer-container">
    <ul class="left">
      <li><NuxtLink to="#">Shipping</NuxtLink></li>
      <li><NuxtLink to="#">FAQ</NuxtLink></li>
      <li><NuxtLink to="#">Exchanges and Returns</NuxtLink></li>
      <li><NuxtLink to="#">Contact information</NuxtLink></li>
    </ul>
    <div class="right">
      <IconBase><IconFacebook/></IconBase>
      <IconBase><IconInstagram/></IconBase>
      <IconBase><IconPinterest/></IconBase>
      <IconBase><IconYoutube/></IconBase>
      <p>&copy; 2022</p>
    </div>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import IconBase from '~/components/IconBase';
import IconFacebook from '~/components/icons/IconFacebook';
import IconInstagram from '~/components/icons/IconInstagram';
import IconPinterest from '~/components/icons/IconPinterest';
import IconYoutube from '~/components/icons/IconYoutube';

export default {
  components: {
    IconBase,
    IconFacebook,
    IconInstagram,
    IconPinterest,
    IconYoutube
  }
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
.footer-container {
  display: flex;
  font-family: "Source Code Pro", monospace;
  background: rgba(7, 7, 98, 1);
  /* background: linear-gradient(354deg, rgb(44, 48, 53) 0%, rgba(7,7,98,1) 100%); */
  color: #ffc04a;
}

.left {
  list-style: none;
  width: 22ch;
  margin: 2rem auto;
  padding: 0;
  text-transform: uppercase;
}

.left a {
  text-decoration: none;
  color: #ffc04a;
}
.left a:hover {
  color: #fff07a;
  text-decoration: underline;
}

.right {
  width: 22ch;
  margin: 2rem auto;
}
</style>
