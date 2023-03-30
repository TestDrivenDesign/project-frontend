<template>
    <li class="help-card">
        <h2>{{ help.name }}</h2>
        <img :src="help.img" :alt="help.name" />
        <p>Link to this website : <a :href="help.link" target="_blank">click here</a></p>
    </li>
</template>

<script>
export default {
  name: 'helpInfo',
  props: ['help']
}
</script>