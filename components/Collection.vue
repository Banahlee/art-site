<template>
  <div >
    <div class="card-container d-flex w-100 justify-content-center">
      <Card
        v-for="art in collection"
        :key="art.number"
        :title="art.title"
        :thumbnail="art.thumbnail"
        :price="art.price"
      />
    </div>
  </div>
</template>

<script>
import Card from './utils/Card.vue';

  export default {
    components: { Card },
    props: {
      collectionName: String,
      art: Array
    },
    data() {
      return {
        collection: []
      }
    },
    mounted() {
      console.log('collection')
      this.getCollection(this.collectionName);
    },
    methods: {
      getCollection(collectionName) {
        if (collectionName == 'all') {
          this.collection = this.art;
        } else {
          this.art.forEach((art) => {
            if (art.collection == collectionName) {
              this.collection.push(art);
            }
          });         
        }
      }
    }
  }
</script>

<style scoped>
.card-container {
  flex-wrap: wrap;
}
</style>