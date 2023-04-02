<template>
  <li class="skin-card">
    <h2>{{ condition.name }}</h2>
    <div class="photo-container">
      <img :src="condition.img1" :alt="condition.name" />
      <img :src="condition.img2" :alt="condition.name" />
    </div>
    <p>Description: {{ condition.info }}</p>
    <p>
      For more info please visit: <span><a :href="condition.link" target="_blank">Link</a></span>
    </p>
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
  /* background-color: #; */
  /* background-color: #eee; */
  /* color: #205295; */
  /* padding: 10px 0; ffb319*/
  /* border-radius: 10px; */
  /* width: 60%; */
  /* margin: 0 auto; */
  border-bottom: 2px solid #205295;
}

h2 {
  text-transform: capitalize;
}

.photo-container {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.photo-container img {
  width: 40%;
  margin: 0 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

p {
  font-size: 1.2rem;
  text-align: justify;
}
p span {
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #205295;
}

a:hover {
  color: #ffb319;
  text-decoration: underline;
}
</style>
