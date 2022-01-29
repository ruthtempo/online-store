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
    <div v-if="userNotFound" class="error">User not found</div>
    <InputField
      class="input-field"
      type="password"
      label="Password"
      autocomplete="off"
      veeValidateRules="required|alpha_dash|min:8"
      v-model="password"
    />
    <div v-if="wrongPassword" class="error">Wrong password</div>
    <button :disabled="invalid" class="login-button">Log In</button>
  </ValidationObserver>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import { ValidationObserver } from "vee-validate";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
export default {
  components: {
    ValidationObserver,
  },
  data() {
    return {
      email: "",
      password: "",
      userNotFound: false,
      wrongPassword: false
    };
  },
  methods: {
    fetchDatabaseUserInfo(uid) {
      const db = getDatabase();
      get(ref(db, '/users/' + uid)).then((snapshot) => {
        const fetched = snapshot.val();
        const user = {
          firstName: fetched.firstName,
          lastName: fetched.lastName,
          userName: fetched.userName,
          email: fetched.email,
          id: fetched.id
        }
        this.$store.commit('setCurrentUser', user);
        let fetchedCart = fetched.cart || [];
        let fetchedFavorites = fetched.favorites || [];
        this.addCarts(fetchedCart);
        this.$store.commit('concatFavorites', fetchedFavorites);
      })
    },
    addCarts(cart) {
      cart.forEach((fetchedItem) => {
        let quantity = fetchedItem.quantity;
        this.$store.dispatch("addOrIncrease", {item: fetchedItem, quantity});
      });
      this.$store.dispatch("updateDatabaseCart");
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
          if (errorCode === 'auth/user-not-found') {
            this.userNotFound = true;
          } else if (errorCode === 'auth/wrong-password' && this.userNotFound !== true) {
            this.wrongPassword = true;
          } else {
            console.log('code: ' + errorCode + ' ,message: ' + errorMessage);
          }
        });
    },
  },
  watch: {
    email: function (newVal, oldVal) {
      if (this.userNotFound === true || this.wrongPassword === true) {
        this.userNotFound = false;
        this.wrongPassword = false;
      }
    },
    password: function (newVal, oldVal) {
      if (this.userNotFound === true || this.wrongPassword === true) {
        this.userNotFound = false;
        this.wrongPassword = false;
      }
    }
  },
};
</script>

<style scoped>

.input-field {
  margin: .4rem 0;
}
.error {
  color: red;
}
.login-button {
  margin-top: 1.4rem;
}

.login-button:disabled {
  background-color: gray;
  color: #3f3f3f;
}
</style>
