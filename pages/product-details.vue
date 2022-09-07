<template>
  <div class="detail-page d-flex justify-content-center align-items-center">
    <Details />
  </div>
</template>

<script>
import Details from '../components/Details.vue';
    export default {
    components: { Details }
}
</script>

<style scoped>
  .detail-page {
    height: 100vh !important;
    max-width: 100vw !important;
  }
</style>