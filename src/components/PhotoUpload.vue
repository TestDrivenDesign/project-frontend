<template>
  <div class="modal">
    <div class="modal-content">
      <h3>Upload your skin photo for assesment</h3>
      <div class="inputs">
        <div class="input-field">
          <label for="dob">Date Of Birth</label>
          <input id="dob" type="date" v-model="date_of_birth" />
        </div>
        <div class="input-field">
          <label for="upload">Add Photo: </label>
          <input id="upload" type="file" @change="uploadFile" accept="image/*" />
        </div>
      </div>
      <div class="info-panel">
        <p>
          Your date of birth: <span>{{ date_of_birth }}</span>
        </p>
        <p>
          chosen file: <span>{{ fileName }}</span>
        </p>
      </div>
      <div class="buttons-container">
        <button @click="uploadPhoto($emit)" class="confirm">Send Photo</button>
        <button @click="cancelPhotoUpload($emit)" class="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const date_of_birth = ref('')
const file = ref(null)
const fileName = ref('')

const uploadFile = (event) => {
  file.value = event.target.files[0]
  fileName.value = event.target.files[0].name
}

const uploadPhoto = ($emit) => {
  $emit('close')
  console.log('photo succesfully uploaded')
}

const cancelPhotoUpload = ($emit) => {
  $emit('close')
  // date_of_birth.value = ''
  // file.value = null
  // fileName.value = ''
  console.log('cancelled')
}
// const fileName = computed(() => file.value?.name)
// const fileExtension = computed(() => fileName.value?.substr(fileName.value?.lastIndexOf('.') + 1))
// const fileMimeType = computed(() => file.value?.type)

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 50%;
  height: 30%;
}

h3 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

div.inputs {
  display: flex;
}

div.input-field {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 15px;
}

/* div.input-field label {
  align-self: center;
}
div.input-field input {
  align-self: center;
} */

.info-panel p span {
  font-weight: bold;
}
div.buttons-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

button {
  cursor: pointer;
  font-size: 1.2rem;
  margin: 10px;
  padding: 5px;
  width: 30%;
}
</style>
