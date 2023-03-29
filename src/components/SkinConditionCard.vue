<template>
  <li class="skin-card">
    <h2>{{ condition.name }}</h2>
    <div class="photo-container">
      <img :src="condition.img1" :alt="condition.name" />
      <img :src="condition.img2" :alt="condition.name" />
    </div>
    <p>Description: {{ condition.info }}</p>
    <p>For more info please visit: <a :href="condition.link" target="_blank">Link</a></p>
  </li>
</template>

<script>
export default {
  name: 'conditionInfo',
  props: ['condition']
}
</script>

<style scoped>
.skin-card {
  width: 80%;
  margin: 0 auto;
}

.photo-container {
  display: flex;
  justify-content: space-between;
}

.photo-container img {
  width: 48%;
}
</style>
