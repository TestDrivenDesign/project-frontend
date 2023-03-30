<template>
  <div class="get-support">
    <h1>Useful links for</h1>
    <ul v-for="help in cancerInfoWebsites" :key="help.name">
      <HelpSupportCard :help="help" />
    </ul>
  </div>
</template>

<script setup>
import HelpSupportCard from '../components/HelpSupportCard.vue';

const cancerInfoWebsites = [
  { name: 'Anthony Nolan', link: 'https://www.anthonynolan.org/', img: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/952/cached.offlinehbpl.hbpl.co.uk/news/NST/EB3D9AB8-C3B5-0E3A-CED854EA10409CDB.jpg' },
  { name: 'Cancer Research UK', link: 'https://www.cancerresearchuk.org/', img: 'https://www.earlycancer.cam.ac.uk/sites/www.earlycancer.cam.ac.uk/files/styles/leading/public/cruk_large.png?itok=efiaSZHD' },
  { name: 'Childhood Cancer Parent Alliance', link: 'https://www.ccpa.org.uk/', img: 'https://wp1900.cancercaremap.org/wp-content/uploads/Screen20Shot202020-08-2520at201.58.5520PM.png' },
  { name: 'Young Lives VS Cancer', link: 'https://www.younglivesvscancer.org.uk/', img:'http://images.justgiving.com/image/39065627-760d-4a63-abe3-de71475aefe0.png?template=size200x200' },
  { name: 'Ellen Macarthur Cancer Trust', link: 'https://www.ellenmacarthurcancertrust.org/', img:'https://upload.wikimedia.org/wikipedia/en/8/8d/Ellen_MacArthur_Foundation_Logo_%28blue%29.jpg' }
]
</script>

<style scoped></style>
