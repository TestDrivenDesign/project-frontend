<template>
  <li class="infowebsite-card">
    <h2>
      <a :href="infoWebsite.link" target="_blank">{{ infoWebsite.name }}</a>
    </h2>
  </li>
</template>

<script>
export default {
  name: 'websiteInfo',
  props: ['infoWebsite']
}
</script>

<style scoped>
h2 {
  padding-left: 20px;
}

a {
  text-decoration: none;
  color: #205295;
}

a:hover {
  text-decoration: underline;
  color: #ffb319;
}
</style>
