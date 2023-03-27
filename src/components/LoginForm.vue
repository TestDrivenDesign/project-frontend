<template>
  <form @submit.prevent="handleLoginSubmission">
    <div class="field-container">
      <label for="login">Email: </label>
      <input id="login" type="email" required />
    </div>
    <div class="field-container">
      <label for="password">Password: </label>
      <input id="password" type="password" required />
    </div>
    <button type="submit">Login</button>
  </form>
  <p>Not Registered yet?: <RouterLink to="register">Register Here</RouterLink></p>
</template>

<script setup>
import { RouterLink } from 'vue-router'

function handleLoginSubmission() {
  console.log('login submitted')
}
</script>

<style lang="scss" scoped></style>
