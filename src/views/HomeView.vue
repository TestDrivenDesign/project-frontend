<script setup></script>

<template>
  <main class="home">
    <h2>Melanoma and skin cancer awareness month</h2>
    <h3>May</h3>
  </main>
</template>

<style scoped>
.home {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  background-image: url('https://www.stratumclinics.com/wp-content/uploads/2022/10/sin-cancer-awareness-2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

h2 {
  text-align: right;
  margin: 20px 20px 0 20px;
  width: 50%;
  font-size: 3rem;
  text-transform: uppercase;
  /* background-image: radial-gradient(circle, #e89c21, #f29965);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text; */
  color: #205295;
}

h3 {
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #205295;
  /* background-image: radial-gradient(circle, #e89c21, #f29965);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text; */
  margin: 10px 20px 10px 20px;
}

@media (max-width: 980px) {
  .home {
    background-position-x: calc(25%);
  }
}
@media (max-width: 680px) {
  .home {
    background-position-x: calc(30%);
  }

  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
}
</style>
