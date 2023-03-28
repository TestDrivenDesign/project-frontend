<script setup>
import { RouterView } from 'vue-router'
// import HeaderComponent from './components/HeaderComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <header>
    <!-- <HeaderComponent /> -->
    <NavbarComponent />
  </header>
  <RouterView />
</template>

<style scoped></style>
