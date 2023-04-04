<template>
  <div class="skinformation">
    <h2>What is skin cancer and what it does?</h2>
    <p>
      Skin cancer is one of the most prevalent forms of cancer and can appear anywhere on the skin.
      Most common are non-melanoma skin cancers, like Basal Cell Carcinoma and Squamous Cell
      Carcinoma.The first signs of non-melanoma cancers are often patches or lesions on the skin
      that show unnatural growth. <br />
      <br />
      Cases of skin cancer have been on the rise for decades now. When detected early, most skin
      cancer types can be treated. That's why it is important to check your skin regularly for any
      irregularities and see a doctor whenever you are concerned about something.
    </p>
    <h2>Types of skin cancer</h2>
    <ul v-for="condition in skinConditionExamples" :key="condition.name">
      <SkinConditionCard :condition="condition" />
    </ul>
  </div>
</template>

<script setup>
import SkinConditionCard from '../components/SkinConditionCard.vue'

const skinConditionExamples = [
  {
    name: 'actinic keratosis',
    img1: 'actinic_keratosis1.jpg',
    img2: 'actinic_keratosis2.jpg',
    info: `Actinic keratoses (also called solar keratoses) are dry scaly patches of skin that have been damaged by the sun.The patches are not usually serious. But there's a small chance they could become skin cancer, so it's important to avoid further damage to your skin.`,
    link: 'https://www.nhs.uk/conditions/actinic-keratoses/#:~:text=Actinic%20keratoses%20(also%20called%20solar,further%20damage%20to%20your%20skin.'
  },
  {
    name: 'basal cell carcinoma',
    img1: '../img/basal_cell_carcinoma1.jpg',
    img2: '../img/basal_cell_carcinoma2.jpg',
    info: `Basal cell carcinoma (BCC) is the most common type of skin cancer, which develops in the top layer of the skin (epidermis). They usually grow slowly, and they rarely spread to other parts of the body.Basal cell carcinomas can occur anywhere on the body but are most common in areas that are exposed to the sun such as your face, head, neck, and ears.If left untreated, Basal cell carcinomas will continue to grow and can eventually cause an ulcer; hence they can have the name 'rodent ulcer'. They can start to destroy surrounding skin if they are left to continue to enlarge over time.Most Basal cell carcinomas are painless, although sometimes they can be itchy or bleed.`,
    link: 'https://www.nbt.nhs.uk/our-services/a-z-services/skin-cancer-services/skin-cancer-patient-information/basal-cell-carcinoma'
  },
  {
    name: 'benign keratosis',
    img1: '../img/benign_keratosis1.jpg',
    img2: '../img/benign_keratosis2.jpg',
    info: `A benign keratosis, commonly known as a Seborrheic Keratosis is a harmless skin growth. They are brown, black or light tan in colour and look waxy or scaly and slightly raised. Benign keratosis become more common as you age.`,
    link: 'https://www.mayoclinic.org/diseases-conditions/seborrheic-keratosis/symptoms-causes/syc-20353878'
  },
  {
    name: 'dermatofibroma',
    img1: '../img/dermatofibroma1.jpg',
    img2: '../img/dermatofibroma2.jpg',
    info: `A dermatofibroma is a common overgrowth of the fibrous tissue situated in the dermis (the deeper of the two main layers of the skin). It is benign (harmless) and will not turn into a cancer. Whilst dermatofibromas are harmless, they can be similar in appearance to other skin lesions like moles.`,
    link: 'https://www.bad.org.uk/pils/dermatofibroma-also-known-as-histiocytoma/'
  },
  {
    name: 'melanoma',
    img1: '../img/melanoma1.jpg',
    img2: '../img/melanoma2.jpg',
    info: `Melanoma is a type of skin cancer that can spread to other organs in the body. The most common sign of melanoma is the appearance of a new mole or a change in an existing mole. This can happen anywhere on the body, but the back, legs, arms and face are most commonly affected. In most cases, melanomas have an irregular shape and more than 1 colour. They may also be larger than normal moles and can sometimes be itchy or bleed.`,
    link: 'https://www.nhs.uk/conditions/melanoma-skin-cancer/'
  },
  {
    name: 'nevus',
    img1: '../img/nevus1.jpg',
    img2: '../img/nevus2.jpg',
    info: `Nevus (plural: nevi) is the medical term for a mole. Nevi are very common. Most peopleTrusted Source have between 10 and 40. Common nevi are harmless collections of colored cells. They typically appear as small brown, tan, or pink spots.

You can be born with moles or develop them later. Moles that you’re born with are known as congenital moles. However, most moles develop during childhood and adolescence. This is known as an acquired nevus. Moles can also develop later in life as a result of sun exposure. There are many types of nevi. Some of them are harmless and others more serious. Read on to learn about the different types and how to know whether you should get one checked out by your doctor.`,
    link: 'https://www.nhs.uk/conditions/moles/'
  },
  {
    name: 'vascular lesion',
    img1: '../img/vascular_lesion1.jpg',
    img2: '../img/vascular_lesion2.jpg',
    info: `Vascular lesions are relatively common abnormalities of the skin and underlying tissues, more commonly known as birthmarks. There are three major categories of vascular lesions: Hemangiomas, Vascular Malformations, and Pyogenic Granulomas. While these birthmarks can look similar at times, they each vary in terms of origin and necessary treatment.`,
    link: 'https://www.southtees.nhs.uk/services/plastic-surgery/vascular-birthmark-clinic/about-vascular-birthmarks/'
  }
]
</script>

<style scoped>
.skinformation {
  /* background-color: rgba(0, 0, 0, 0.2); */
  background-color: #f9f9f9;
  margin: 10px auto;
  padding: 40px;
  color: #205295;
  /* border: 2px solid #205295; */
  /* border-radius: 15px; */
  width: 90%;
}
h2 {
  font-size: 2rem;
}

p {
  font-size: 1.2rem;
  text-align: justify;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
</style>
