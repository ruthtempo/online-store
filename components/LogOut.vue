<template>
  <button @click="handleLogOut">Log Out</button>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
    methods: {
        handleLogOut() {
            const auth = getAuth();
            console.log('Logging out');
            signOut(auth).then(() => {
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
                console.log(error);
            });
        }
    }
}
</script>

<style>

</style>