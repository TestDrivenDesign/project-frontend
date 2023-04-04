<template>
  <li class="prev-card">
    <h2 @click="handleExpandDescription" class="accordion">
      <font-awesome-icon v-bind:icon="expandIcon" /> {{ props.diagnosis.submitted_at }}
    </h2>
    <Collapse :when="isExpanded" class="diagnosis">
      <div class="img-container">
        <img :src="props.diagnosis.file_name" :alt="props.diagnosis.submitted_at" />
      </div>
      <p class="description">assesment: {{ assesmentResult }}</p>
    </Collapse>
  </li>
</template>

<script setup>
import { ref } from 'vue'
import { Collapse } from 'vue-collapsed'

const props = defineProps(['diagnosis', 'assessment'])

const assesmentResult = props.assessment(props.diagnosis.diagnosis)
const isExpanded = ref(false)
const expandIcon = ref('fa-solid fa-chevron-down')

const changeExpandIcon = () => {
  if (isExpanded.value) {
    expandIcon.value = 'fa-chevron-up'
    return expandIcon
  } else {
    expandIcon.value = 'fa-chevron-down'
    return expandIcon
  }
}

const handleExpandDescription = () => {
  isExpanded.value = !isExpanded.value
  changeExpandIcon()
}
</script>

<style scoped>
.diagnosis {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #205295;
  flex-wrap: wrap;
  transition: height 300ms cubic-bezier(0.33, 1, 0.68, 1);
}

h2 {
  color: #205295;
}
h2:hover {
  cursor: pointer;
  text-decoration: underline;
  color: #ffb319;
}
.description {
  text-align: justify;
  flex-basis: 70%;
  flex-grow: 1;
}

.img-container {
  width: 200px;
  height: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.img-container img {
  width: 100%;
  height: 100%;
}

.info .link {
  flex-basis: 100%;
  flex-grow: 1;
  font-weight: bold;
}

@media (max-width: 680px) {
  .help-card {
    width: 80%;
    padding-left: 10px;
  }
  .info img {
    margin-right: 10px;
  }
}
@media (max-width: 480px) {
  .help-card {
    width: 90%;
  }

  .info img {
    margin-bottom: 10px;
  }

  .description {
    margin-top: 0;
  }
}
</style>
