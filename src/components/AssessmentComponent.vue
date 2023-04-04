<template>
  <div class="modal">
    <div class="modal-content">
      <h3>This is your assesment {{ login.first_name }} {{ login.last_name }}</h3>
      <div class="user-info">
        <p>Your DOB: {{ login.date_of_birth ? login.date_of_birth.toLocaleDateString() : '-' }}</p>
      </div>
      <div v-if="currentDiagnosis" class="assessment">
        <div class="img-container">
          <img :src="currentDiagnosis.file_name" alt="assesment" />
        </div>
        <p>Your result is: {{ assesment(currentDiagnosis.diagnosis) }}</p>
      </div>
      <p v-else>No File Sent</p>
      <h3>Result History:</h3>
      <div v-for="diagnosis in previousDiagnoses" :key="diagnosis.name" class="prev-diagnosis-list">
        <PreviousDiagnosisCard :diagnosis="diagnosis" :assessment="assesment" />
      </div>
      <button @click="$emit('close')" class="cancel">
        <font-awesome-icon class="x-icon" icon="fa-solid fa-circle-xmark" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { getAllDiagnoses } from '../utils/api'
import PreviousDiagnosisCard from '../components/PreviousDiagnosisCard.vue'

const user = useUserStore()
const { login } = user
const currentDiagnosis = ref({})
// const currentDiagnosisResult = ref('')

const previousDiagnoses = ref([])

function showPreviousDiagnoses(newDiagnoses) {
  previousDiagnoses.value = newDiagnoses.slice(0, newDiagnoses.length - 1)
}

function setCurrentDiagnosisValue(diagnosisFromApi) {
  currentDiagnosis.value = diagnosisFromApi
  // currentDiagnosisResult.value = diagnosisFromApi.diagnosis
  //   console.log(currentDiagnosisResult.value)
  //   console.log(currentDiagnosisPath.value)
}

function getPreviousDiagnoses() {
  getAllDiagnoses(login.user_id).then((diagnosesArrayFromApi) => {
    setCurrentDiagnosisValue(diagnosesArrayFromApi[diagnosesArrayFromApi.length - 1])
    showPreviousDiagnoses(diagnosesArrayFromApi)
  })
}

getPreviousDiagnoses()

const assesment = (assessment) => {
  if (assessment === 0) {
    return `This looks like it could be Actinic Keratosis: Actinic keratoses (also called solar keratoses) are dry scaly patches of skin that have been damaged by the sun.The patches are not usually serious. But there's a small chance they could become skin cancer, so it's important to avoid further damage to your skin. Check out our Skinformation section for more details.`
  } else if (assessment === 1) {
    return "This looks like it could be Basal Cell Carcinoma: Basal cell carcinoma (BCC) is the most common type of skin cancer, which develops in the top layer of the skin (epidermis). They usually grow slowly, and they rarely spread to other parts of the body.Basal cell carcinomas can occur anywhere on the body but are most common in areas that are exposed to the sun such as your face, head, neck, and ears.If left untreated, Basal cell carcinomas will continue to grow and can eventually cause an ulcer; hence they can have the name 'rodent ulcer'. They can start to destroy surrounding skin if they are left to continue to enlarge over time.Most Basal cell carcinomas are painless, although sometimes they can be itchy or bleed. Check out our skinformation section for more details."
  } else if (assessment === 2) {
    return 'This looks like it could be a benign keratosis lesion: A benign keratosis, commonly known as a Seborrheic Keratosis is a harmless skin growth. They are brown, black or light tan in colour and look waxy or scaly and slightly raised. Benign keratosis become more common as you age. Check out our skinformation section for more details.'
  } else if (assessment === 3) {
    return 'This looks like it could be dematofibroma: A dermatofibroma is a common overgrowth of the fibrous tissue situated in the dermis (the deeper of the two main layers of the skin). It is benign (harmless) and will not turn into a cancer. Whilst dermatofibromas are harmless, they can be similar in appearance to other skin lesions like moles. Check out our skinformation section for more details.'
  } else if (assessment === 4) {
    return 'This looks like it could be a melanoma: Melanoma is a type of skin cancer that can spread to other organs in the body. The most common sign of melanoma is the appearance of a new mole or a change in an existing mole. This can happen anywhere on the body, but the back, legs, arms and face are most commonly affected. In most cases, melanomas have an irregular shape and more than 1 colour. They may also be larger than normal moles and can sometimes be itchy or bleed. Check out our skinformation section for more details.'
  } else if (assessment === 5) {
    return 'This looks like it could be a nevus: Nevus (plural: nevi) is the medical term for a mole. Nevi are very common. Most peopleTrusted Source have between 10 and 40. Common nevi are harmless collections of colored cells. They typically appear as small brown, tan, or pink spots. You can be born with moles or develop them later. Moles that you’re born with are known as congenital moles. However, most moles develop during childhood and adolescence. This is known as an acquired nevus. Moles can also develop later in life as a result of sun exposure. There are many types of nevi. Some of them are harmless and others more serious. Read on to learn about the different types and how to know whether you should get one checked out by your doctor. Check out our skinformation section for more details.'
  } else if (assessment === 6) {
    return 'This looks like it could be a vascular lesion: Vascular lesions are relatively common abnormalities of the skin and underlying tissues, more commonly known as birthmarks. There are three major categories of vascular lesions: Hemangiomas, Vascular Malformations, and Pyogenic Granulomas. While these birthmarks can look similar at times, they each vary in terms of origin and necessary treatment. Check out our skinformation section for more details.'
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
  height: auto;
}

img {
  width: 100%;
  height: 100%;
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

.diagnoses {
  /* display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #205295;
  flex-wrap: wrap; */
  transition: height 300ms cubic-bezier(0.33, 1, 0.68, 1);
}

.prev-diagnosis-list {
  list-style: none;
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
