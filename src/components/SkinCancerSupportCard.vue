<template>
    <li class="skinhelp-card">
        <h2><a :href="skinhelp.link" target="_blank">{{ skinhelp.name }}</a></h2>
        <p>{{ skinhelp.tag }}</p>
        <img :src="skinhelp.img" :alt="skinhelp.name"/>
        
    </li>
    
</template>

<script>
export default 
{
 name: 'skinhelpInfo',
 props: ['skinhelp']
 }



</script>