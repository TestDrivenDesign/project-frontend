<script setup></script>

<template>
  <main class="home">
    <h2>Check yourself before you wreck yourself!</h2>
  </main>
</template>

<style scoped>
.home {
  flex-grow: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://cdn.pixabay.com/photo/2017/11/06/15/30/elephants-2923917_960_720.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

h2 {
  width: 50%;
  font-size: 4rem;
  text-transform: uppercase;
  background-image: radial-gradient(circle, #553c9a, #ee4b2b);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
</style>
