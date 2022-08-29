<template>
<div>
  <Navbar :references="this.$refs" />
  <Landing id="landing"/>
  <Collections id="collections" ref="artContainer"/>
  <About id="about" />
</div>
</template>

<script>
import Landing from '../components/Landing.vue';
import Navbar from '../components/Navbar.vue';
import About from '../components/About.vue';
import global from '@/mixins/global.js';
import Vue from 'vue';

Vue.mixin(global);
export default {
    name: "IndexPage",
    components: { Landing, Navbar, About }
}
</script>
