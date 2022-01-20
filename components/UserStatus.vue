<template>
    <div class="user-status-wrapper">
        <div class="us-popover-title">
            <nuxt-link to="/checkout"> 
                <IconBase icon-name="user" strokeColor="#ffc04a"><IconUser/></IconBase>
            </nuxt-link>
        </div>
        <div class="us-popover-content">
            {{user ? `You're logged in (${user.email})` : "You're not logged in" }}
            <div v-if="!user" class="user-not-logged-in">
                <LogIn />
                <p>Don't have an account? <NuxtLink to="/sign-in">Sign In</NuxtLink></p>
            </div>
            <LogOut v-if="user"/>
        </div>
    </div>
</template>

<script>
import LogIn from '~/components/LogIn'
import LogOut from '~/components/LogOut'
import IconBase from '~/components/IconBase'
import IconUser from '~/components/icons/IconUser'
export default {
    name:"UserStatus",
    components: {
        IconBase,
        IconUser,
        LogIn,
        LogOut 
    },
    computed: {
        user() {
        return this.$store.state.user
        }
    }
}
</script>

<style scoped>
.user-status-wrapper {
  background-color: transparent;
  max-width:300px;
  margin: 0 auto
}
.user-status-wrapper:hover .us-popover-content {
  z-index: 10;
  opacity: 1;
  visibility: visible;
  transform: translate(0, -20px);
  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}
.us-popover-content {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    background: rgb(0,111,126);
    background: linear-gradient(354deg, rgb(44, 48, 53) 0%, rgba(7,7,98,1) 100%);
    border: 2px dashed #ffc04a;
    right:100px;
    padding: 1.5rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    width: 35ch;
}
path {
    fill: #ffc04a;
}
a {
    text-decoration: none;
    color:white;
}
h3, h4 {
  font-size: 15px;
}
button {
  background-color: transparent;
}
</style>
