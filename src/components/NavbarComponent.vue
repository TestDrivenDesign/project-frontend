<template>
  <nav class="navbar">
    <div class="logo">
      <RouterLink to="/">Home / Logo ?</RouterLink>
    </div>
    <div id="mainListDiv" class="main_list">
      <RouterLink to="/skinformation">Skinformation</RouterLink>
      <RouterLink to="/help">Help & Support</RouterLink>
      <RouterLink to="/support">Support The Fight</RouterLink>
      <div v-if="user.isUserLoggedIn" class="user">
        <RouterLink to="/profile"
          >{{ user.login.first_name }} {{ user.login.last_name }}</RouterLink
        >
        <button @click="handleLogOut">Log Out</button>
      </div>
      <RouterLink v-else to="/login">Login / Register</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user'
import router from '../router/index'

const user = useUserStore()

const { logUserOut } = user

const redirectPage = () => {
  router.push({ path: '/' })
}

const handleLogOut = () => {
  logUserOut()
  redirectPage()
}
</script>

<style scoped>
.navbar {
  background-color: transparent;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 1.4rem;
  text-align: center;
}

.navbar a {
  margin-right: 10px;
}
.navbar div.logo {
  float: left;
  width: auto;
  height: auto;
  padding-left: 3rem;
}

.navbar div.logo a {
  text-decoration: none;
  color: #000;
}

.navbar div.logo a:hover {
  color: #00e676;
}

.navbar div.main_list {
  float: right;
  /* width: 100%; */
  padding-right: 3rem;
}

.navbar div.main_list a {
  text-decoration: none;
  color: #000;
  padding: 10px;
}
.navbar div.main_list div.user {
  display: inline-block;
}
.navbar div.main_list a:hover {
  color: #00e676;
}

/* CSS */
button {
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 800;
  line-height: 15px;
  min-height: 30px;
  outline: 0;
  padding: 4px 6px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

button:hover,
button:active {
  background-color: initial;
  background-position: 0 0;
  color: #ff4742;
}

button:active {
  opacity: 0.5;
}
</style>
