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
      <label for="upload">Upload Photo: </label>
      <input type="file" @change="uploadFile" accept="image/*" />
      <button @click="submitFile">Submit photo</button>
    </div>
    <div class="take-photo-container">
      <RouterLink class="take-photo-button" to="/takephoto"
        ><button>Take a photo</button></RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user'

const file = ref(null)

// const fileName = computed(() => file.value?.name)
// const fileExtension = computed(() => fileName.value?.substr(fileName.value?.lastIndexOf('.') + 1))
// const fileMimeType = computed(() => file.value?.type)

const uploadFile = (event) => {
  file.value = event.target.files[0]

  console.log(file)
}

// const submitFile = async () => {
//   const reader = new FileReader()
//   reader.readAsDataURL(file.value)
//   reader.onload = async () => {
//     const encodedFile = reader.result.split(',')[1]
//     const data = {
//       file: encodedFile,
//       fileName: fileName.value,
//       fileExtension: fileExtension.value,
//       fileMimeType: fileMimeType.value
//     }
//     try {
//       const endpoint = 'https://example.com/upload'
//       const response = await axios.post(endpoint, data)
//       console.log(response.data)
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

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
