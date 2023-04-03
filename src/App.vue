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
  font-size: 1.6rem;
  text-align: center;
  border-bottom: 2px solid #ffb319;
  /* border-bottom: 2px solid #205295; */
}

@media (max-width: 1250px) {
  header {
    font-size: 1.4rem;
  }
}
@media (max-width: 1100px) {
  header {
    font-size: 1rem;
    height: 40px;
    line-height: 40px;
  }
}
@media (max-width: 860px) {
  header {
    font-size: 0.8rem;
  }
}
</style>
