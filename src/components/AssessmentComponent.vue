<template>
  <div class="modal">
    <div class="modal-content">
      <h3>This is your assesment {{ login.first_name }} {{ login.last_name }}</h3>
      <div class="user-info">
        <p>Your DOB: {{ login.date_of_birth ? login.date_of_birth.toLocaleDateString() : '-' }}</p>
      </div>
      <div v-if="diagnosisPhotoPath" class="assessment">
        <div class="img-container">
          <img :src="path" alt="assesment" />
        </div>
        <p>Your result is: {{ assesment() }}</p>
      </div>
      <p v-else>No File Sent</p>
      <button @click="$emit('close')" class="cancel">
        <font-awesome-icon class="x-icon" icon="fa-solid fa-circle-xmark" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
const user = useUserStore()
const { login, diagnosisPhotoPath, assesmentValue } = user

const path = 'src/img/assessment/' + diagnosisPhotoPath

const assesment = () => {
  if (assesmentValue === '0') {
    return 'This is description for assessment 0 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat dignissimos dicta, unde ratione numquam exercitationem eos deserunt accusantium, totam quaerat. Consequuntur vitae soluta debitis optio? Voluptas quasi quo eaque.'
  } else if (assesmentValue === '1') {
    return 'This is description for assessment 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat dignissimos dicta, unde ratione numquam exercitationem eos deserunt accusantium, totam quaerat. Consequuntur vitae soluta debitis optio? Voluptas quasi quo eaque.'
  } else if (assesmentValue === '2') {
    return 'This is description for assessment 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat dignissimos dicta, unde ratione numquam exercitationem eos deserunt accusantium, totam quaerat. Consequuntur vitae soluta debitis optio? Voluptas quasi quo eaque.'
  } else if (assesmentValue === '3') {
    return 'This is description for assessment 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat dignissimos dicta, unde ratione numquam exercitationem eos deserunt accusantium, totam quaerat. Consequuntur vitae soluta debitis optio? Voluptas quasi quo eaque.'
  } else if (assesmentValue === '4') {
    return 'This is description for assessment 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat dignissimos dicta, unde ratione numquam exercitationem eos deserunt accusantium, totam quaerat. Consequuntur vitae soluta debitis optio? Voluptas quasi quo eaque.'
  } else if (assesmentValue === '5') {
    return 'This is description for assessment 5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat dignissimos dicta, unde ratione numquam exercitationem eos deserunt accusantium, totam quaerat. Consequuntur vitae soluta debitis optio? Voluptas quasi quo eaque.'
  } else if (assesmentValue === '6') {
    return 'This is description for assessment 6 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat dignissimos dicta, unde ratione numquam exercitationem eos deserunt accusantium, totam quaerat. Consequuntur vitae soluta debitis optio? Voluptas quasi quo eaque.'
  } else {
    return 'Unable to assess condition of your skin. Try uploading different photo'
  }
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
  min-height: 60%;
}

h3 {
  /* text-align: center; */
  font-size: 1.8rem;
  margin-bottom: 15px;
}
p {
  font-size: 1.4rem;
}

.assessment {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
}
.assessment p {
  width: 50%;
  font-size: 1.4rem;
  margin-left: 20px;
  text-align: justify;
}
.img-container {
  width: 40%;
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
  .modal-content {
    width: 90%;
    /* height: 80%; */
  }
  .assessment {
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  .assessment p {
    width: 90%;
    font-size: 1.2rem;
  }

  h3 {
    margin-bottom: 10px;
    margin-top: 40px;
    font-size: 1.4rem;
  }
  p {
    margin: 10px;
  }

  .img-container {
    width: 50%;
  }
}
@media (max-width: 680px) {
  .modal-content {
    margin: 20% auto;
    padding: 10px;
    border-radius: 10px;
    /* width: 85%; */
    /* height: 80%; */
  }

  p {
    font-size: 1.1rem;
  }

  .img-container {
    width: 60%;
    margin-bottom: 10px;
  }

  button {
    height: 25px;
    width: 25px;
  }
}
</style>
