<template>
  <div class="user-panel">
    <div class="user-profile">
      <h2>User Panel</h2>
      <p><span>User ID: </span>{{ login.user_id }}</p>
      <p><span>First Name: </span> {{ login.first_name }}</p>
      <p><span>Last Name: </span> {{ login.last_name }}</p>
      <p><span>Email Address: </span> {{ login.email }}</p>
      <div class="photo-upload">
        <h3>
          Please use button below to upload photo of your skin, if you would like to compare it with
          our database:
        </h3>
        <button @click="uploadModalActive = true">Submit photo for assesment</button>
      </div>
      <div class="show-assessment">
        <h3>Check your assesment based on photo provided:</h3>
        <button @click="assesmentModalActive = true">Check assesment</button>
      </div>
      <!-- <div class="take-photo-container">
        <RouterLink class="take-photo-button" to="/takephoto"
          ><button>Take a photo</button></RouterLink
        >
      </div> -->
    </div>
    <font-awesome-icon class="user-icon" icon="fa-solid fa-user" />
  </div>
  <PhotoUpload v-if="uploadModalActive" @close="uploadModalActive = false" />
  <AssesmentComponent v-if="assesmentModalActive" @close="assesmentModalActive = false" />
</template>

<script setup>
import { ref } from 'vue'
// import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user'
import PhotoUpload from '../components/PhotoUpload.vue'
import AssesmentComponent from '../components/AssessmentComponent.vue'

const user = useUserStore()
const { login } = user

const uploadModalActive = ref(false)
const assesmentModalActive = ref(false)
</script>

<style scoped>
.user-panel {
  position: relative;
}
.user-profile {
  width: 90%;
  height: 80vh;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #205295;
  background-color: #f9f9f9;
  border-radius: 15px;
}
h2 {
  font-size: 2.5rem;
  text-transform: uppercase;
  margin: 0;
}

p {
  font-size: 1.6rem;
}
p span {
  font-weight: bold;
}

.photo-upload {
  margin-top: 50px;
  width: 50%;
}

h3 {
  font-size: 1.3rem;
}

button {
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
  padding: 10px 15px;
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

button:active {
  opacity: 0.5;
}

.take-photo-container {
  display: none;
}

.user-icon {
  position: absolute;
  top: 50px;
  right: 100px;
  width: 200px;
  height: 200px;
  padding: 20px;
  border: 2px solid #205295;
  border-radius: 10px;
}

@media (max-width: 980px) {
  .user-icon {
    right: 60px;
  }
}
@media (max-width: 780px) {
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }

  h3 {
    font-size: 1.1rem;
  }
  .user-icon {
    right: 40px;
    width: 120px;
    height: 120px;
    border-radius: 20px;
  }

  .photo-upload {
    text-align: justify;
    width: 90%;
  }

  .show-assessment {
    width: 90%;
  }
}
@media (max-width: 480px) {
  .user-panel {
    overflow: hidden;
  }
  .user-profile {
    width: 100%;
    border: none;
  }
  .user-icon {
    display: none;
  }
  .take-photo-container {
    display: block;
  }

  .photo-upload {
    margin-right: 0;
  }

  button {
    width: 100%;
  }
}
</style>
