<template>
      <div class="form-container">
        <h2>Register</h2>
        <form class="register-form" @submit.prevent="handleSubmit">
            <InputField class="input-field" type="text" label="First Name" v-model="user.firstName" />
            <InputField class="input-field" type="text" label="Last Name" v-model="user.lastName" />
            <InputField class="input-field" type="text" label="User Name" v-model="user.userName" />
            <InputField class="input-field" type="email" label="Email" v-model="user.email" />
            <InputField class="input-field" type="password" label="Password" v-model="user.password" />
            <div class="form-buttons">
                <button>Register</button>
                <NuxtLink to="/">Cancel</NuxtLink>
            </div>
        </form>
    </div>
</template>

<script>
export default {
data() {
    return {
        user: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: ''
        }
    }
},
methods: {
    handleSubmit(e) {
        return
    }
}
}
</script>

<style scoped>
.form-container {
    width: 80vw;
    margin: 0 auto 3rem;;
}
.input-field {
    margin-top: 1rem;
}
.form-buttons {
    margin-top: 2rem;
}
</style>