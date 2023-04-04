<template>
  <div class="info-container">
    <div class="about section">
      <h2>What is Skin Scan?</h2>
      <div class="info">
        <p>
          Skin cancer, as dangerous and serious as it is, if caught in time, can be fully treatable.
          That is why early detection is critical. It is one of the greatest challenges of modern
          dermatology, posing significant risk to your health and life, with patients far too often
          showing up at the doctor's office too late.<br />
          <br />
          Skin Scan is an application, which offers a possibility to take a self-exam, and receive
          an immediate risk assessment based on skin photograph, along with an indication of whether
          to visit a doctor and with what urgency.
        </p>
        <img class="logo-img" src="src/assets/img/logo.png" alt="logo" />
      </div>
    </div>
    <div class="how-to section">
      <h2>How to take assessment</h2>
      <div class="info">
        <p class="">
          In order to receive your skin assesment, please register/log in. From your user panel you
          will be able to upload photograph of your skin, which will be compared with our database,
          and assessed by our automatic system. Within few seconds you will receive results, which
          will be available for you to view from your panel.
        </p>
        <img src="https://getskinhelp.com/wp-content/uploads/2020/11/step-3.jpg" alt="skin photo" />
      </div>
    </div>
    <div class="usefull-links section">
      <h2>Usefull links</h2>
      <div class="info">
        <p>
          We also provide list of trustworthy and reliable associations, where you can find detailed
          information regarding each type of skin cancer, find out how to seek for professional
          help, make a donation, or check in what other ways you can support the cause
        </p>
        <img
          src="https://drbutton-psychology.co.uk/wp-content/uploads/2019/10/useful-links.jpg"
          alt="usefull links"
        />
      </div>
    </div>
    <div class="disclaimer">
      <p>
        <span>DISCLAIMER: THIS WEBSITE DOES NOT PROVIDE MEDICAL ADVICE</span> The information,
        including but not limited to, text, graphics, images and other material contained on this
        website are for informational purposes only. No material on this site is intended to be a
        substitute for professional medical advice, diagnosis or treatment. Always seek the advice
        of your General Pracricioner, dermatologist, or other qualified health care provider with
        any questions you may have regarding a medical condition or treatment and before undertaking
        a new health care regimen, ad never disregard professional medical advice or delay in
        seeking it because of something you have read on this website.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.info-container {
  margin: 0 auto;
  width: 90%;
}
p {
  width: 50%;
  /* padding: 10px; */
  font-size: 1.4rem;
  text-align: justify;
}

h2 {
  padding-left: 10px;
}

.info {
  display: flex;
  align-items: center;
  padding: 10px;
}

img {
  margin: auto;
}

.about p {
  font-size: 1.3rem;
}
.about img {
  width: 400px;
  height: 100px;
}

.how-to img {
  width: 300px;
}

.usefull-links img {
  width: 350px;
}

.disclaimer {
  margin: 10px auto;
  padding: 10px;
  font-size: 0.8rem;
}

.disclaimer p {
  width: 90%;
  font-size: 1.1rem;
}
.disclaimer span {
  font-weight: bold;
}

@media (max-width: 980px) {
  .about img {
    width: 300px;
    height: 80px;
  }

  .how-to img {
    width: 250px;
  }

  .usefull-links img {
    width: 300px;
  }
}
@media (max-width: 768px) {
  .info {
    flex-direction: column-reverse;
  }

  p {
    width: 90%;
    align-self: flex-start;
  }
  .about img {
    width: 300px;
    height: 80px;
  }

  .how-to img {
    width: 250px;
  }

  .usefull-links img {
    width: 300px;
  }
}
</style>
