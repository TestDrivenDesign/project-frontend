<template>
  <div class="container">
    <h2>Please Login</h2>
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue'
</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding: 30px 40px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
