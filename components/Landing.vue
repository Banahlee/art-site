<template>
    <div class="landing-container">
      <div class="hero-img">
        <div class="text-container w-100 h-100 col-lg-12 col-md-12 d-flex align-items-center justify-content-center">
            <div class="text-center ">
              <!-- <div class="hero-img"></div> -->
              <h1 class="hero-text mb-0 montserrat">Shakur's Artistry</h1>
              <p class="subtext montserrat text-white mb-3">Contemporary art for any occasion</p>
              <Button
                class="cta-button mx-auto"
                :text="'take a tour'"
                :btn-classes="'ml-2 w-50'"
                :text-classes="'small-caps m-0 py-2 px-3 montserrat'"
              />
              <div class="carot-btn">
                <button @click="scrollTo('collections')">
                  <i class="fa-solid fa-angle-down"></i>
                </button>
              </div>
                   
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import Button from './utils/Button.vue';
import Navbar from './Navbar.vue';
    export default {
    components: { Button, Navbar }
}
</script>

<style scoped>
.hero-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("@/assets/img/products/woman-forest.jpeg");
  height: 98%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  animation: zoom-out 1.5s ease;
}

.carot-btn {
  position: absolute;
  bottom: -1.5rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  
}

.carot-btn button {
  border: 1px solid transparent;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: white;
  z-index: 4 !important;
  box-shadow: 0px 5px 5px var(--shadowColor);
}

.hero-text {
  animation: drop 1.5s ease;
}

.subtext {
  animation: rise 1.5s ease;
}

.cta-button {
  animation: rise 1.75s ease;
}
.hero-text {
    color: white;
    font-size: 3rem;
}

.subtext {
  font-size: 1.5rem;
}

.landing-container {
  max-width: 100vw !important;
  overflow: hidden;
  height: 99vh;
  position: relative;
}

@media (max-width: 912px) {
  .hero-img {
    background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.5)), url("@/assets/img/products/woman-forest-mobile.png");
    height: 95% !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100vw !important;
    max-width: 100%;
  }

  .landing-container {
    max-width: 100vw !important;
    overflow: hidden;
    height: 100vh;
    position: relative;
  }

  .hero-text {
    color: white;
    font-size: 2.5rem;
}

.subtext {
  font-size: 1rem;
}
}

</style>