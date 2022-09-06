<template>
  <div id="main" class="pt-5 main-container d-flex flex-column justify-content-center col-lg-12">
    <div class="w-100">
      <div class="title text-center mt-5">
        <h1 class="small-caps ">shakur's art</h1>
        <!-- <h3 class="small-caps">collections</h3> -->
        <div class="tab-container">
          <ul class="collection-list navbar">
            <li
              class="collection-tab nav-item small-caps mx-2"
              :class="activeTab === 'all' ? 'active' : ''"
              @click="filterCollection('all')"
              >
              all
            </li>
            <li 
              v-for="tab in collectionTabs"
              :key="tab.id"
              class="collection-tab nav-item small-caps mx-2"
              :class="activeTab === tab.name ? 'active' : ''"
              @click="filterCollection(tab.name)"
              >
              {{ tab.name }}
            </li>
          </ul>          
        </div>
      </div>
      <div class="card-container d-flex w-100 justify-content-center">
          <Card
            v-for="art in filteredArtList"
            :key="art.number"
            :art="art"
          /> 
          
            <!-- 
            :title="art.title"
            :thumbnail="art.thumbnail"
            :price="art.price" -->
      </div>      
    </div>
    <hr class="mt-4">
  </div>
</template>

<script>
import Card from './utils/Card.vue';
import data from '@/data.json';
import layout from '@/layout.json'
  export default {
    components: { Card },
    data() {
      return {
        artList: data.art,
        filteredArtList: data.art,
        collectionTabs: layout.collections,
        collection: 'all',
        activeTab: 'all'
      }
    },
    methods: {
      filterCollection(tabName) {
        this.activeTab = tabName;
        if (tabName == 'all') {
          this.filteredArtList = this.artList
          return
        }
        this.filteredArtList = this.artList.filter(art => art.collection == tabName)
        console.log('art list: ', tabName)
      }
    }
}
</script>

<style scoped>
.main-container {
  min-height: 90vh;
}

.card-container {
  flex-wrap: wrap;
}
.title h1 {
  font-weight: 400;
  font-size: 3rem;
}
.collection-list {
  list-style: none;
}

.navbar {
  justify-content: center !important;
}

.nav-item {
  font-size: 1.5rem;
  cursor: pointer;
}

.active::after {
  content: "";
  display: block;
  width: 100% !important;
  height: 2px;
  background-color: var(--mainBlue);
  transition: width 0.5s;
}

.collection-tab {
  font-size: 200%;
}

.collection-tab::after {
  content: "";
  display: block;
  width: 0px;
  height: 2px;
  background-color: var(--mainBlue);
  transition: width 0.5s;
}

.collection-tab:hover::after {
  width: 100%;
  transition: width 0.5s;
}

hr {
  height: 1px;
  border: 0;
  clear:both;
  display:block;
  width: 75%;               
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

@media (max-width: 912px) {
  hr {
    display: none;
  }

  .collection-list {
    font-size: 12px;
   
  }
}
</style>