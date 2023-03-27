<template>
  <form @submit.prevent="handleRegisterSubmit">
    <div class="register-field">
      <label for="first-name">First Name: </label>
      <input id="first-name" type="text" />
    </div>
    <div class="register-field">
      <label for="last-name">Last Name: </label>
      <input id="last-name" type="text" />
    </div>
    <div class="register-field">
      <label for="email">Email: </label>
      <input id="email" type="email" />
    </div>
    <div class="register-field">
      <label for="password">Password: </label>
      <input id="password" type="password" />
    </div>
    <div class="register-field">
      <label for="password-confirm">Confirm Password: </label>
      <input id="password-confirm" type="password" />
    </div>
    <button>Register</button>
  </form>
</template>

<script setup>
function handleRegisterSubmit() {
  console.log('register ok')
}
</script>

<style lang="scss" scoped></style>
