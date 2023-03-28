<template>
  <nav class="navbar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/skinformation">Skinformation</RouterLink>
    <RouterLink to="/support">Get Support</RouterLink>
    <div v-if="user.isUserLoggedIn" class="user">
      <RouterLink to="/profile">{{ user.login.firstName }} {{ user.login.lastName }}</RouterLink>
      <button @click="handleLogOut">Log Out</button>
    </div>
    <RouterLink v-else to="/login">Login / Register</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user'

const user = useUserStore()

const handleLogOut = () => {
  user.logUserOut()
}
</script>

<style scoped>
.navbar {
  width: 100vw;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
}

.navbar a {
  margin-right: 10px;
}
</style>
