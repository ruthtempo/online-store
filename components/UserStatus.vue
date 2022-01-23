<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <Popover :left="left" :top="top">
    <template v-slot:face>
      <nuxt-link to="/checkout">
        <IconBase icon-name="user" strokeColor="#ffc04a">
            <IconUser />
        </IconBase>
      </nuxt-link>
    </template>

    <template v-slot:content>
      <p class="message">
        {{ user.id ? `Logged in as ${user.userName}` : "You're not logged in" }}
      </p>
      <div v-if="!user.id">
        <LogIn />
        <p class="message">
          Don't have an account? <NuxtLink to="/sign-in">Sign In</NuxtLink>
        </p>
      </div>
      <LogOut v-if="user.id" />
    </template>
  </Popover>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import IconBase from "~/components/IconBase";
import IconUser from "~/components/icons/IconUser";
import LogIn from "~/components/LogIn";
import LogOut from "~/components/LogOut";
import Popover from "~/components/Popover";
export default {
  name: "UserStatus",
  components: {
    IconBase,
    IconUser,
    LogIn,
    LogOut,
    Popover,
  },
  props: {
    left: {
      type: [String, Number],
    },
    top: {
      type: [String, Number],
    },
  },
  computed: {
    user() {
      return this.$store.getters.getCurrentUser;
    },
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
.message {
  font-family: "Source Code Pro", monospace;
  color: #ffc04a;
}
a {
  text-decoration: none;
  color: white;
}
</style>
