<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->
<template>
  <div class="background">
	  <div class="index-container">
		  <div class="banner-div">
			  <NuxtLink to="/women's%20clothing">
				  <img src="~/assets/w-clothing-banner.jpg" alt="Women's clothing" class="banner-img">
			  </NuxtLink>
		  </div>
		  <div class="banner-div">
			  <NuxtLink to="/electronics">
				  <img src="~/assets/electronics-banner.jpg" alt="Electronics" class="banner-img">
			  </NuxtLink>
		  </div>
		  <div class="banner-div">
			  <NuxtLink to="/men's%20clothing">
				  <img src="~/assets/m-clothing-banner.jpg" alt="Men's clothing" class="banner-img">
			  </NuxtLink>
		  </div>
		  <div class="banner-div">
			  <NuxtLink to="/jewelery">
				  <img src="~/assets/jewelery-banner.jpg" alt="Jewelery" class="banner-img">
			  </NuxtLink>
		  </div>
	  </div>
  </div>
</template>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
.background {
	background-color: #070762;
}
.index-container {
	display: flex;
	flex-wrap: wrap;
	width: max(364px, 90vw);
	padding-top: 0;
	margin-bottom: 2rem;
}
.banner-img {
	height: auto;
	max-height: 450px;
	width: 100%;
	max-width: 650px;
	border: 2px solid #070762;
	border-radius: 10px;;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.26);
}
.banner-div {
	margin: auto;
}
@media (min-width: 390px) {
	.index-container {
		margin: auto;
	}
@media (min-width: 435px) {
	.index-container{
	margin: 0 auto;
	}
	.banner-div {
		margin-bottom: 1rem;
	}
}
}

@media (min-width: 1700px) {
	.banner-img {
		max-width: 750px;
	}
}
</style>
  