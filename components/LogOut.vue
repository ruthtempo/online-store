<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <button @click="handleLogOut" class="logout-button">
    Log Out
  </button>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  methods: {
    handleLogOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$store.commit('clearCurrentUser');
          this.$store.commit('emptyCart');
          this.$store.commit('emptyFavorites');
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.logout-button {
  margin-top: 0;
  margin-bottom: .5rem;
}
</style>
