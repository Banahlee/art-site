<template>
  <div>
    <Navbar2 />
    <div class="detail-page d-flex justify-content-center ">
      <Details />
    </div>    
  </div>
</template>

<script>
import Navbar2 from '../components/utils/Navbar2.vue'
import Details from '../components/Details.vue';
    export default {
    components: { Details, Navbar2 }
}
</script>

<style scoped>
  .detail-page {
    height: 100vh !important;
    max-width: 100vw !important;
  }
</style>