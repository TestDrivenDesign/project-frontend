<template>
  <li class="help-card">
    <h2 @click="handleExpandDescription" class="accordion">
      {{ expandIcon }} {{ props.help.name }}
    </h2>
    <Collapse :when="isExpanded" class="info">
      <img :src="props.help.img" :alt="props.help.name" />
      <p class="description">{{ props.help.tag }}</p>
      <p class="link">
        <a :href="props.help.link" target="_blank">Visit {{ props.help.name }} website</a>
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
const props = defineProps(['help'])
</script>

<style scoped>
.help-card {
  width: 50%;
  padding-left: 20px;
}

h2 {
  margin: 0;
}

h2:hover {
  cursor: pointer;
  text-decoration: underline;
  color: #ffb319;
}

.info {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #205295;
  flex-wrap: wrap;
  transition: height 300ms cubic-bezier(0.33, 1, 0.68, 1);
}

a {
  text-decoration: none;
  color: #205295;
}
a:hover {
  text-decoration: underline;
  color: #ffb319;
}
.info .description {
  text-align: justify;
  flex-basis: 70%;
  flex-grow: 1;
}

.info img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
  margin-bottom: 20px;
  /* flex-basis: 20%; */
}

.info .link {
  flex-basis: 100%;
  flex-grow: 1;
  font-weight: bold;
}
</style>
