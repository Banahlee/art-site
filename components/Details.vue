<template>
  <div class="detail-container my-4 d-flex">
    <div class="img-container max-100 p-3 py-3 mb-2 d-flex justify-content-center align-items-center max-100 col-lg-8 col-xs-12">
      <img class="max-100" :src="require(`@/assets/img/products/${art.thumbnail}`)" alt="">
    </div>
    <div class="info-container col-lg-4 col-xs-12">
      <div class="text-container">
        <h1 class="title pt-2">{{ art.title }}</h1>
        <p class="price small-caps">{{ art.category == 'for sale' ? `$${art.price}` : 'privately owned' }}</p>
        <hr>
        <p class="description">{{ art.description }}</p>
        <h3 class="collection small-caps">collection: {{ art.collection }}</h3>
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
  width: 100%;
  padding: 48px;
}

.img-container {
  background-color: var(--artBackgroundColor);
  min-height: 300px;
}

img {
  max-height: 600px;
  box-shadow: 0px 10px 10px -2px var(--shadowColor);
}

.title {
  font-size: 2rem;
}

.description {
  font-size: 1.25rem;
}

.collection, .price {
  font-size: 1.25rem;
}

@media (max-width: 991px) {
  .detail-container {
    flex-direction: column;
    margin-top: 5rem !important;
    height: 100%;
    width: 100%;
    padding: 0px;
  }

  .title {
    font-size: 1.5rem;
  }

  .collection, .price, .description {
    font-size: inherit;
  }

  .text-container {
    text-align: center;
  }

  img {
    max-height: 450px;
  }
}

@media (min-width: 1800px) {
  .detail-container {
    width: 80%;
  }

  .img {
    max-height: 800px !important;
  }

  .img-container {
    min-height: 800px;
  }
}
</style>