<template>
  <div class="modal">
    <div class="modal-content">
      <h3>This is your assesment {{ login.first_name }} {{ login.last_name }}</h3>
      <div class="user-info">
        <p>Your age: {{ age ? age : '-' }}</p>
      </div>
      <div class="assesment">
        <div class="img-container">
          <img src="../img/actinic_keratosis1.jpg" alt="assesment" />
        </div>
        <p>Your result is: {{ assesment() }}</p>
      </div>
      <button @click="$emit('close')" class="cancel">
        <font-awesome-icon class="x-icon" icon="fa-solid fa-circle-xmark" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
const user = useUserStore()
const { login } = user

const age = new Date().toLocaleDateString - login.date_of_birth
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
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #f9f9f9;
  margin: 5% auto;
  padding: 30px;
  border: 2px solid #205295;
  border-radius: 10px;
  width: 80%;
  height: 60%;
}

h3 {
  /* text-align: center; */
  font-size: 1.8rem;
  margin-bottom: 15px;
}
p {
  font-size: 1.4rem;
}

.assesment {
  display: flex;
  align-items: center;
  margin-top: 40px;
}
.assesment p {
  font-size: 1.4rem;
  margin-left: 20px;
}
.img-container {
  width: 400px;
  object-fit: contain;
}

img {
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 5px;
}

button {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 1%;
  right: 1%;
  cursor: pointer;
  background-color: transparent;
  font-size: 1.2rem;
  margin: 10px;
  height: 35px;
  width: 35px;
  border: none;
}

.x-icon {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #205295;
}

@media (max-width: 980px) {
  .assesment {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }

  .modal-content {
    width: 90%;
    height: 80%;
  }

  h3 {
    margin-bottom: 10px;
  }
  p {
    margin: 10px;
  }
}
@media (max-width: 680px) {
  .modal-content {
    margin: 20% auto;
    padding: 10px;
    border-radius: 10px;
    width: 80%;
    height: 80%;
  }

  p {
    font-size: 1.1rem;
  }

  img {
    width: 60%;
    margin-bottom: 10px;
  }

  button {
    height: 25px;
    width: 25px;
  }
}
</style>
