<template>
  <li class="skinhelp-card">
    <h2 @click="handleExpandDescription">
      {{ expandIcon }}
      {{ props.skinHelp.name }}
    </h2>
    <Collapse :when="isExpanded" class="info">
      <img :src="props.skinHelp.img" :alt="props.skinHelp.name" />
      <p class="description">{{ props.skinHelp.tag }}</p>
      <p class="link">
        <a :href="props.skinHelp.link" target="_blank">Visit {{ props.skinHelp.name }} website</a>
      </p>
    </Collapse>
  </li>
</template>

<script setup>
import { ref } from 'vue'
import { Collapse } from 'vue-collapsed'

const isExpanded = ref(false)
const expandIcon = ref('+')

const changeExpandIcon = () => {
  if (isExpanded.value) {
    expandIcon.value = '-'
    return expandIcon
  } else {
    expandIcon.value = '+'
    return expandIcon
  }
}

const handleExpandDescription = () => {
  isExpanded.value = !isExpanded.value
  changeExpandIcon()
}

const props = defineProps(['skinHelp'])
// export default {
//   name: ,
//   props: ['skinHelp']
// }
</script>

<style scoped>
.skinhelp-card {
  width: 50%;
  padding-left: 20px;
}

h2 {
  /* padding-left: 20px; */
  margin: 0;
  transition: 0.2s;
}

h2:hover {
  cursor: pointer;
  text-decoration: underline;
  color: #ffb319;
}

a {
  text-decoration: none;
  color: #205295;
}
a:hover {
  text-decoration: underline;
  color: #ffb319;
}
.info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  transition: height 300ms cubic-bezier(0.33, 1, 0.68, 1);
}

.info p {
  margin: 0;
  text-align: justify;
}

.info .description {
  flex-grow: 1;
  flex-basis: 70%;
}

.info img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 10px;
}

.info .link {
  flex-basis: 100%;
  flex-grow: 1;
  font-weight: bold;
}
</style>
