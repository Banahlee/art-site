<template>
  <div class="detail-container d-flex">
    <div class="img-container max-100 col-lg-8 col-xs-12">
      <img class="max-100" :src="require(`@/assets/img/products/${art.thumbnail}`)" alt="">
    </div>
    <div class="info-container col-lg-4 col-xs-12">
      <div>
        <h1 class="title pt-2">{{ art.title }}</h1>
        <p class="price">{{ art.price != 'private collection' ? `$${art.price}` : art.price }}</p>
        <p class="description">{{ art.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        art: this.$store.state.currentProduct
      }
    }
  }
</script>

<style lang="scss" scoped>

.detail-container {
  max-width: 99vw !important;
}

img {
  max-height: 600px;
  box-shadow: 1px 10px 10px var(--shadowColor);
}

@media (max-width: 991px) {
  .detail-container {
    flex-direction: column;
  }
}
</style>