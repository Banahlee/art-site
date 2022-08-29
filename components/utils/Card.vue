<template>
  <div 
    class="card mx-4 my-4 p-3 col-xs-12 col-lg-3 d-flex align-items-center justify-content-center"
    :class="mouseleaveCard"
    @mouseleave="dropCard()"
  >
    <div class="w-100 content-container">
      <div class="w-100 flex-column my-auto align-items-center w-100 img-container d-flex justify-content-center">
        <img id="" class="max-100 thumbnail" :src="require(`@/assets/img/${thumbnail}`)" alt=""/>
        <!-- <div class="py-1 small-caps w-100 text-center view-bar">view</div> -->
      </div>
      <div class="card-footer align-items-center text-container montserrat d-flex justify-content-center mt-3">
        <div class="max-100 w-100 text-center">
          <h3 class="title w-100 mb-0">{{ title }}</h3>
          <hr>
          <span class="price small-caps mx-auto">{{ price != 'private collection' ? `$${price}` : price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { set } from 'vue'
  export default {
    props: {
      title: String,
      category: String,
      thumbnail: String,
      price: String
    },
    data() {
      return {
        mouseleaveCard: ''
      }
    },
    methods: {
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
  min-height: 20%;
  position: relative;
  background-color: #e5e5e526;
  box-shadow: 0px 5px 5px var(--shadowColor);
  top: 0;
  cursor: pointer;
  transform: scale(1);
}

.card:hover {
  position: relative;
  border: 1px solid gray;
  top: -20px;
  transition: all .3s ease-in-out;
  /* transform: scale(1.02); */
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
  position: relative;
}

img {
  max-height: var(--artHeight);
  box-shadow: 0px 5px 5px rgb(160, 159, 159);
  background-color: transparent;
}

hr {
  margin: 0.5rem 0.5rem;
}

.price {
  font-size: 1.25rem;
}

@media (max-width: 480px) {
  .card {
    min-height: 10%;
    border: none !important;
    background-color: transparent;
    box-shadow: none;
  }

  .title {
    font-size: 1.5rem;
  }
}
</style>