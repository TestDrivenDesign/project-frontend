<template>
  <div class="modal">
    <div class="modal-content">
      <h3>Upload your skin photo for assesment</h3>
      <form @submit.prevent="sendPhoto($emit)">
        <div class="inputs">
          <div class="input-field calendar">
            <font-awesome-icon class="calendar-icon" icon="fa-solid fa-calendar-days" size="lg" />
            <Datepicker
              :full-month-name="true"
              v-model="date_of_birth"
              placeholder="Add date of birth"
              class="date"
            />
          </div>
          <div class="input-field">
            <input id="upload" type="file" @change="uploadFile" accept="image/*" class="file" />
          </div>
        </div>
        <div class="info-panel">
          <p>
            Your date of birth:
            <span>{{ date_of_birth ? date_of_birth.toLocaleDateString() : '-' }}</span>
          </p>
          <p>
            chosen file: <span>{{ fileName }}</span>
          </p>
        </div>
        <div class="buttons-container">
          <button type="submit" class="confirm">Send Photo</button>
          <button @click="cancelPhotoUpload($emit)" class="cancel">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { sendPhotoForAssesment } from '../utils/api'
import Datepicker from 'vue3-datepicker'

const user = useUserStore()
const { login, addDateOfBirth } = user

const date_of_birth = ref(null)
const file = ref(null)
const fileName = ref('')

const uploadFile = (event) => {
  file.value = event.target.files[0]
  fileName.value = event.target.files[0].name
}

const sendPhoto = ($emit) => {
  // const formData = new FormData()
  // formData.append('user_id', login.user_id)
  // formData.append('date_of_birth', date_of_birth.value)
  // formData.append('file', file.value)
  // console.log(formData)
  // console.log(date_of_birth.value)
  // console.log(login.user_id)
  // console.log(file.value)
  addDateOfBirth(date_of_birth.value)
  sendPhotoForAssesment(login.user_id, date_of_birth.value, file.value)
  // .then((response) => {
  //   console.log(response)
  // })

  console.log('photo succesfully uploaded')
  $emit('close')
}

const cancelPhotoUpload = ($emit) => {
  $emit('close')
  // date_of_birth.value = ''
  // file.value = null
  // fileName.value = ''
  console.log('cancelled')
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
  height: 35%;
}

h3 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.calendar {
  display: flex;
}

.calendar-icon {
  margin-right: 10px;
}

div.input-field {
  margin: 20px;
}

.info-panel p span {
  font-weight: bold;
}
div.buttons-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

button {
  margin-right: 20px;
  width: 200px;
  background: #205295;
  border: 1px solid #205295;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 30px;
  outline: 0;
  padding: 8px 12px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

button:hover,
button:active {
  background-color: initial;
  background-position: 0 0;
  /* color: #205295; */
  background: #ffb319;
  border: 1px solid #ffb319;
}
</style>
