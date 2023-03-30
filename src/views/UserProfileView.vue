<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <p>First Name: {{ login.firstName }}</p>
    <p>Last Name: {{ login.lastName }}</p>
    <p>Email Address: {{ login.email }}</p>
    <div class="photo-upload">
      <h3>
        Please use button below to upload photo of your skin, if you would like to compare it with
        our database:
      </h3>
      <button @click="submitPhoto">Submit photo for assesment</button>
    </div>
    <div class="take-photo-container">
      <RouterLink class="take-photo-button" to="/takephoto"
        ><button>Take a photo</button></RouterLink
      >
    </div>
  </div>
  <PhotoUpload :modalActive="modalActive" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user'
import PhotoUpload from '../components/PhotoUpload.vue'

const modalActive = ref(false)

const user = useUserStore()
const { login } = user
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
