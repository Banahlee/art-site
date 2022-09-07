<template>
  <div 
    class="card mx-4 my-4 p-3 col-xs-12 col-lg-3 col-xl-4 d-flex align-items-center justify-content-center"
    @mouseleave="dropCard()"
    @click="setCurrentProduct(art)"
  >
    <div class="w-100 max-100 content-container">
      <div class="w-100 py-2 flex-column my-auto align-items-center img-container d-flex justify-content-center">
        <img id="" class="mb-2 thumbnail" :src="require(`@/assets/img/products/${art.thumbnail}`)" alt=""/>
        <!-- <div class="py-1 small-caps w-100 text-center view-bar">view</div> -->
      </div>
      <div class="align-items-center text-container montserrat d-flex justify-content-center mt-3">
        <div class="max-100 w-100 text-center">
          <h3 class="title w-100 mb-0">{{ art.title }}</h3>
          <hr>
          <span class="price small-caps mx-auto">{{ art.category == 'for sale' ? `$${art.price}` : 'privately owned' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { set } from 'vue'
  export default {
    props: {
      art: Object
    },
    data() {
      return {
        mouseleaveCard: ''
      }
    },
    methods: {
      setCurrentProduct(product) {
        this.$store.dispatch('setCurrentProduct', product);
        this.$router.push('/product-details')
        console.log('current product: ', this.$store.state.currentProduct);
      },
      dropCard() {
        this.mouseleaveCard = 'mouseleaveCard';
        setTimeout(() => {
          this.mouseleaveCard = '';
        }, 500);
      }
    }
    
  }
</script>

<style scoped>
.card {
  max-width: 600px;
  position: relative;
  box-shadow: none;
  top: 0;
  cursor: pointer;
  transform: scale(1);
  border: 0px solid gray;
  transition: all .3s ease-in-out;
}

.card:hover {
  position: relative;
  border: 1px solid gray;
  top: -20px;
  transition: all .3s ease-in-out;
  box-shadow: 0px 5px 15px var(--shadowColor);
}

.mouseleaveCard {
  border: 1px solid rgba(0, 0, 0, 0.125);
  transition: all 0.5s ease;
}

.card-footer {
  background-color: transparent;
  border: none;
}

.content-container {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.img-container {
  background-color: var(--artBackgroundColor);
  position: relative;
  overflow: hidden;
  display: inline-block;
}

img {
  max-height: var(--artHeight);
  box-shadow: 1px 5px 5px var(--shadowColor);
  background-color: rgba(204, 204, 204, 0.183);
}

hr {
  margin: 0.5rem 0.5rem;
}

.title  {
  font-size: 1.25rem;
}
.price {
  font-size: 1rem;
}
@media (max-width: 1280px) {
  .card {
    /* min-height: 10%; */
    border: none !important;
    background-color: transparent;
    box-shadow: none;
  }

}

@media (max-width: 912px) {
  .card {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  img {
    max-width: 100% !important;
    max-height: 340px;
  }
}
</style>