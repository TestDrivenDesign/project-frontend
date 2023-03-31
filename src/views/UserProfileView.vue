<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <p>User ID: {{ login.user_id }}</p>
    <p>First Name: {{ login.first_name }}</p>
    <p>Last Name: {{ login.last_name }}</p>
    <p>Email Address: {{ login.email }}</p>
    <div class="photo-upload">
      <h3>
        Please use button below to upload photo of your skin, if you would like to compare it with
        our database:
      </h3>
      <button @click="modalActive = true">Submit photo for assesment</button>
    </div>
    <div class="take-photo-container">
      <RouterLink class="take-photo-button" to="/takephoto"
        ><button>Take a photo</button></RouterLink
      >
    </div>
  </div>
  <PhotoUpload v-if="modalActive" @close="modalActive = false" />
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user'
import PhotoUpload from '../components/PhotoUpload.vue'

const user = useUserStore()
const { login } = user

const modalActive = ref(false)
</script>

<style scoped>
.take-photo-container {
  display: none;
}

@media (max-width: 480px) {
  .take-photo-container {
    display: block;
  }
}
</style>
