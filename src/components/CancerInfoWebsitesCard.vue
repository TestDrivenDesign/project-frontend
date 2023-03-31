<template>
<li class="infowebsite-card">
  <h2><a :href="infowebsite.link" target="_blank">{{ infowebsite.name }}</a></h2>
</li>
</template>

<script>
export default
{
  name: 'websiteinfo',
  props: ['infowebsite']
}
</script>