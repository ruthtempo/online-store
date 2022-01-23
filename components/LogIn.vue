<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <ValidationObserver
    tag="form"
    v-slot="{ invalid }"
    class="register-form"
    @submit.prevent="handleLogIn"
  >
    <InputField
      class="input-field"
      type="email"
      label="Email"
      autocomplete="on"
      veeValidateRules="required|email"
      v-model="email"
    />
    <InputField
      class="input-field"
      type="password"
      label="Password"
      autocomplete="off"
      veeValidateRules="required|alpha_dash|min:8"
      v-model="password"
    />
    <button :disabled="invalid">Log In</button>
  </ValidationObserver>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import { ValidationObserver } from "vee-validate";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
export default {
  components: {
    ValidationObserver,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    fetchDatabaseUserInfo(uid) {
      const db = getDatabase();
      return onValue(ref(db, '/users/' + uid), (snapshot) => {
        const fetched = snapshot.val();
        const user = {
          firstName: fetched.firstName,
          lastName: fetched.lastName,
          userName: fetched.userName,
          email: fetched.email,
          id: fetched.id
        }
        this.$store.commit('setCurrentUser', user);
        this.$store.commit('concatCarts', fetched.cart);
        // TODO: Concatenate saved and current favorites
      })
    },
    handleLogIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.fetchDatabaseUserInfo(user.uid)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
  },
};
</script>
