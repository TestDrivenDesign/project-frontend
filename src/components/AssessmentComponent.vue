<template>
  <div class="modal">
    <div class="modal-content">
      <h3>This is your assesment</h3>
      <div class="user-info">
        <p>First Name: {{ login.first_name }}</p>
        <p>Last Name: {{ login.last_name }}</p>
        <p>Date OF Birth: {{ login.date_of_birth ? login.date_of_birth : '-' }}</p>
      </div>
      <div class="assesment">
        <div class="img-container">
          <img src="../img/actinic_keratosis1.jpg" alt="assesment" />
        </div>
        <p>Your result is: {{ assesment() }}</p>
      </div>
      <button @click="$emit('close')" class="cancel">x</button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
const user = useUserStore()
const { login } = user

const assesment = () => {
  return Math.floor(Math.random() * 6)
}
</script>

<style scoped>
div.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 80%;
  height: 80%;
}

h3 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.assesment {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.assesment p {
  font-size: 1.6rem;
  margin-left: 10px;
}
.img-container {
  width: 500px;
  object-fit: contain;
}

img {
  width: 100%;
  height: auto;
}

button {
  position: absolute;
  top: 1%;
  right: 1%;
  cursor: pointer;
  background-color: transparent;
  font-size: 1.2rem;
  margin: 10px;
  /* padding: 10px; */
  border-radius: 50%;
}
</style>
