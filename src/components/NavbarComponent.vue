<template>
  <nav class="navbar">
    <div class="logo">
      <RouterLink to="/"> <img class="logo-img" src="../img/logo.png" alt="logo" /></RouterLink>
    </div>
    <!-- <img class="ribbon" src="../img/black-ribbon.png" alt="black ribbon" /> -->
    <div v-bind:class="{ 'mobile-active': isMobileMenuOpen }" id="mainListDiv" class="main_list">
      <RouterLink @click="toggleMenuOpen" class="home-mobile" to="/">Home</RouterLink>
      <RouterLink @click="toggleMenuOpen" to="/about">About Skin Scan</RouterLink>
      <RouterLink @click="toggleMenuOpen" to="/skinformation">Skinformation</RouterLink>
      <RouterLink @click="toggleMenuOpen" to="/help">Help & Support</RouterLink>
      <div v-if="user.isUserLoggedIn" class="user">
        <RouterLink @click="toggleMenuOpen" to="/profile"
          >{{ user.login.first_name }} {{ user.login.last_name }}</RouterLink
        >
        <button @click="handleLogOut">Log Out</button>
      </div>
      <RouterLink @click="toggleMenuOpen" v-else to="/login">Login / Register</RouterLink>
    </div>
    <button
      v-bind:class="{ 'menu-open': isMobileMenuOpen }"
      @click="toggleMenuOpen($emit)"
      class="menu-burger"
    >
      <font-awesome-icon
        v-bind:class="{ 'open-bars': isMobileMenuOpen }"
        class="bars-icon"
        icon="fa-solid fa-bars"
      />
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user'
import router from '../router/index'

const user = useUserStore()

const { logUserOut } = user

const isMobileMenuOpen = ref(false)

const redirectPage = () => {
  router.push({ path: '/' })
}

const handleLogOut = () => {
  logUserOut()
  toggleMenuOpen()
  redirectPage()
}

const toggleMenuOpen = () => {
  if (window.innerWidth < 768) {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  } else {
    isMobileMenuOpen.value = false
  }
}
</script>

<style scoped>
.navbar {
  position: relative;
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

a.home-mobile {
  display: none;
}
img.ribbon {
  position: absolute;
  left: 15px;
  top: 4px;
  width: 22px;
  z-index: 0;
}

.navbar div.main_list {
  display: block;
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

.menu-burger {
  display: none;
  position: absolute;
  right: 5px;
  top: 5px;
  background-color: transparent;
}

.bars-icon {
  color: #205295;
}

.menu-open {
  border: 1px solid #f9f9f9;
}

.open-bars {
  color: #f9f9f9;
}

@media (max-width: 1200px) {
  .logo-img {
    width: 200px;
    margin-top: 14px;
  }

  button {
    border-radius: 6px;
    font-size: 15px;
    font-weight: 800;
    line-height: 12px;
    min-height: 30px;
    padding: 6px 8px;
  }
}

@media (max-width: 1100px) {
  .logo-img {
    width: 150px;
    line-height: 40px;
    margin-top: 8px;
  }

  button {
    border-radius: 4px;
    font-size: 12px;
    font-weight: 800;
    line-height: 10px;
    min-height: 20px;
    padding: 6px 8px;
  }
}

@media (max-width: 768px) {
  .navbar div.main_list {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
    left: -105%;
    background-color: rgba(0, 0, 0, 0.8);
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.3s;
  }
  .navbar div.main_list.mobile-active {
    left: 0;
  }

  .navbar div.main_list a {
    padding: 6px 6px 6px 6px;
    text-decoration: none;
    font-size: 25px;
    color: #f9f9f9;
    display: block;
    transition: 0.3s;
  }

  button {
    border-radius: 6px;
    font-size: 15px;
    font-weight: 800;
    line-height: 12px;
    min-height: 30px;
    padding: 6px 8px;
  }

  .menu-burger {
    display: block;
    z-index: 3;
    /* border-color: #f9f9f9; */
  }

  /* .bars-icon {
    color: #f9f9f9;
  } */
}
</style>
