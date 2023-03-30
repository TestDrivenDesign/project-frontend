<template>
<li class="help-card">
        <h2><a :href="help.link" target="_blank">{{ help.name }}</a></h2>
        <p>{{ help.tag }}</p>
        <img :src="help.img" :alt="help.name" />
    </li>
</template>

<script>
export default
{
  name: 'helpInfo',
  props: ['help']
}
</script>