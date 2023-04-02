<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <header>
    <NavbarComponent />
  </header>
  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 1.8rem;
  text-align: center;
  border-bottom: 2px solid #ffb319;
  /* border-bottom: 2px solid #205295; */
}
</style>
