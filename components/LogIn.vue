<template>
    <ValidationObserver 
        tag="form"
        v-slot="{ invalid }"
        class="register-form" 
        @submit.prevent="handleLogIn">
        <InputField
            class="input-field"
            type="email"
            label="Email"
            autocomplete="on"
            veeValidateRules="required|email"
            v-model="email" />
        <InputField
            class="input-field"
            type="password"
            label="Password"
            autocomplete="off"
            veeValidateRules="required|alpha_dash|min:8"
            v-model="password" />
        <button :disabled="invalid">Log In</button>
    </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
export default {
    components: {
        ValidationObserver
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleLogIn() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                });
        }
    }

}
</script>

<style>

</style>