<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="form-container">
    <h2>Register</h2>
    <ValidationObserver
      tag="form"
      v-slot="{ invalid }"
      class="register-form"
      @submit.prevent="handleSubmit"
    >
      <InputField
        class="input-field"
        type="text"
        label="First Name"
        autocomplete="on"
        veeValidateRules="required|alpha_spaces"
        v-model="newUser.firstName"
      />
      <InputField
        class="input-field"
        type="text"
        label="Last Name"
        autocomplete="on"
        veeValidateRules="required|alpha_spaces"
        v-model="newUser.lastName"
      />
      <InputField
        class="input-field"
        type="text"
        label="User Name"
        autocomplete="off"
        veeValidateRules="required|alpha_dash|min:6"
        v-model="newUser.userName"
      />
      <InputField
        class="input-field"
        type="email"
        label="Email"
        autocomplete="on"
        veeValidateRules="required|email"
        v-model="newUser.email"
      />
      <InputField
        class="input-field"
        type="password"
        label="Password"
        autocomplete="off"
        veeValidateRules="required|alpha_dash|min:8"
        v-model="newUser.password"
      />
      <div v-if="alreadyExists" class="error">
        An account with this email adress already exists.
      </div>
      <div class="form-buttons">
        <button :disabled="invalid" class="register-button">Register</button>
        <div class="button">
          <NuxtLink to="/">Cancel</NuxtLink>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import { ValidationObserver } from "vee-validate";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
export default {
  components: {
    ValidationObserver,
  },
  data() {
    return {
      newUser: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        id: "",
        cart: [],
        favorites: []
      },
      alreadyExists: false,
    };
  },
  methods: {
    createNewDatabaseEntry(user) {
      const db = getDatabase();
      set(ref(db, 'users/' + user.id), user);
    },
    handleSubmit(e) {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        this.newUser.email,
        this.newUser.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.newUser.id = user.uid;
          this.newUser.cart = this.$store.getters.getCart;
          delete this.newUser.password; // We don't want to store user passwords...
          this.$store.commit("setCurrentUser", this.newUser);
          this.createNewDatabaseEntry(this.newUser)
          this.$router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/email-already-in-use") {
            // Display "account already exists" error message
            this.alreadyExists = true;
          } else {
            console.log(
              "errorcode: " + errorCode + ", errormsg: " + errorMessage
            );
          }
        });
    },
  },
  watch: {
    // Clear "account already exists" error message when user edits email input
    "newUser.email": function (newVal, oldVal) {
      if (this.alreadyExists === true) {
        this.alreadyExists = false;
      }
    },
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
.form-container {
  width: 355px;
  margin: 0;
  padding-top: 1rem;
  padding-left: 5px;
}

h2{
  display:flex;
  justify-content: center;
}
.register-form{
  background-color: whitesmoke;
  padding:50px;
  border-radius:15px;
}
@media (min-width: 430px) {
  .form-container {
    margin: 0 auto;
  }
}
@media (min-width: 700px) {
  .form-container {
    width: 550px;
  }
}
@media (min-width: 1420px) {
  .form-container {
    width: 620px;
  }
}
.input-field {
  margin-top: 1rem;
}
.form-buttons {
  width: 360px;
  margin: .9rem auto;
  display: flex;
  gap: 2rem;
}
.error {
  color: red;
}
.button {
  display: block;
  width: 150px;
  padding: 15px 0;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: transparent;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  color: black;
  border: none;
  border: 2px solid rgba(7, 7, 98, 1);
  border-radius: 5px;
  cursor: pointer;
}
.button:hover {
  background-color: lightgray;
}
.button a,
.button a:visited {
  text-decoration: none;
  color: rgba(7, 7, 98, 1);
}
.register-button:disabled {
  background-color: gray;
  color: #3f3f3f;
}
</style>
