<template>
  <nav class="navbar">
    <div class="logo">
      <RouterLink to="/"> <img class="logo-img" src="../img/logo.png" alt="logo" /></RouterLink>
    </div>
    <!-- <img class="ribbon" src="../img/black-ribbon.png" alt="black ribbon" /> -->
    <div id="mainListDiv" class="main_list">
      <RouterLink to="/about">About Skin Scan</RouterLink>
      <RouterLink to="/skinformation">Skinformation</RouterLink>
      <RouterLink to="/help">Help & Support</RouterLink>
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
/* .navbar {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 1.8rem;
  text-align: center;
  border-bottom: 2px solid #ffb319;
} */

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

.logo-img {
  width: 250px;
  line-height: 60px;
  margin-top: 10px;
}

.navbar div.logo a {
  text-decoration: none;
  font-weight: bold;
  color: #205295;
}

img.ribbon {
  position: absolute;
  left: 15px;
  top: 4px;
  width: 22px;
  z-index: 0;
}

/* .navbar div.logo a:hover {
  background-color: rgba(0, 0, 0, 0.1);
  color: #ffb319;
} */

.navbar div.main_list {
  float: right;
  padding-right: 1rem;
}

.navbar div.main_list a {
  text-decoration: none;
  font-weight: bold;
  color: #205295;
  padding: 10px;
}
.navbar div.main_list div.user {
  display: inline-block;
}
.navbar div.main_list a:hover {
  /* background-color: rgba(0, 0, 0, 0.1); */
  color: #ffb319;
}

/* CSS */
button {
  background: #205295;
  border: 1px solid #205295;
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
  padding: 8px 12px;
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
  /* color: #205295; */
  background: #ffb319;
  border: 1px solid #ffb319;
}

button:active {
  opacity: 0.5;
}
</style>
