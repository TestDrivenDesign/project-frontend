<template>
  <nav class="navbar">
    <div class="logo">
      <RouterLink to="/"> Home </RouterLink>
    </div>
    <img class="ribbon" src="../img/black-ribbon.png" alt="black ribbon" />
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
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 1.8rem;
  text-align: center;
  border-bottom: 2px solid #eee;
}

.navbar a {
  margin-right: 10px;
}
.navbar div.logo {
  position: relative;
  float: left;
  width: auto;
  height: auto;
  padding-left: 1.5rem;
  z-index: 1;
}

.navbar div.logo a {
  text-decoration: none;
  padding: 15px;
  font-weight: bold;
  color: #205295;
}

img.ribbon {
  position: absolute;
  left: 28px;
  top: 12px;
  width: 22px;
  z-index: 0;
}

.navbar div.logo a:hover {
  background-color: rgba(0, 0, 0, 0.1);
  /* border-bottom: 3px solid #2c74b3; */
}

.navbar div.main_list {
  float: right;
  padding-right: 1rem;
}

.navbar div.main_list a {
  text-decoration: none;
  font-weight: bold;
  color: #205295;
  padding: 15px;
}
.navbar div.main_list div.user {
  display: inline-block;
}
.navbar div.main_list a:hover {
  background-color: rgba(0, 0, 0, 0.1);
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
