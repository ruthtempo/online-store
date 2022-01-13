<template>
      <div class="form-container">
        <h2>Register</h2>
        <form class="register-form" @submit.prevent="handleSubmit">
            <InputField type="text" label="First Name" v-model="user.firstName" />
            <InputField type="text" label="Last Name" v-model="user.lastName" />
            <InputField type="text" label="UserName" v-model="user.userName" />
            <InputField type="email" label="Email" v-model="user.email" />
            <InputField type="password" label="Password" v-model="user.password" />
            <div class="form-group">
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
    margin: auto;
}
</style>