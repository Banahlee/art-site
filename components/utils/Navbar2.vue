<template>
  <div
    class="navbar navbar-dark py-3 align-items-center container change-nav max-100 col-lg-12" 
  >
    <nuxt-link to="/#collections">
      <i class="back-arrow text-white fa-solid fa-angle-left"></i>
    </nuxt-link>
    <!-- <nuxt-link to="/" class="text-center d-flex align-items-center navbar-brand great-vibes">
      <img class="max-100 logo" src="@/assets/img/logo/shakur-logo.png" alt="">
    </nuxt-link> -->
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .back-arrow {
    font-size: 1.5rem;
  }
</style>