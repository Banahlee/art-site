<template>
  <b-navbar
    class="navbar navbar-dark container sticky-top max-100 col-lg-12" 
    :class="[changeNav ? 'change-nav' : '']"
    toggleable="md"
  >
    <a href="#" class=" d-flex align-items-center navbar-brand great-vibes">
      <img class="max-100 logo" src="@/assets/img/logo/shakur-logo.png" alt="">
    </a>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse class="w-100 collapse navbar-collapse justify-content-end" id="nav-collapse" is-nav>
        <ul class="navbar-nav">
            <li 
              v-for="link in navLinkList"
              :key="link.id"
              class="nav-item mr-5"
            >
                <p @click="scrollTo(link.linkTo)" class="nav-link text-white">{{ link.title }}</p>
            </li>
        </ul>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { METHODS } from 'http'
import layout from '@/layout.json'

  export default {
    props: { references: Object },
    data() {
      return {
        changeNav: false,
        collections: 0,
        navLinkList: layout.navLinks
      }
    },
    mounted() {
      this.collections = this.references.artContainer.$el.offsetHeight
      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          this.changeNav = true;
        } else {
          this.changeNav = false;
        }
      });
    },
    methods: {
      handleChangeNav(event) {
        if(event == 'mouseover') {
          this.changeNav = true;
        } 
        else if (event != 'mouseover' && window.scrollY < this.collections) {
          this.changeNav = false;
        }
      }
    }
  }
</script>

<style scoped>
  .logo {
    transition: background 0.3s ease-in-out;
    height: auto !important;
    max-width: 150px;
  }

  .navbar-toggler-icon {
    color: white;
    background-color: transparent;
  }
  
  .navbar {
    background-color: transparent;
    position: fixed;
    z-index: 1001 !important;
    width: 100vw !important;
    max-width: 100vw !important;
    overflow: hidden !important;
    top: 0;
    transition: background 0.3s ease-in-out;
  }

  .navbar:hover {
    background-color: var(--mainBlue);
    color: black;
    box-shadow: 0px 0px 10px rgb(44, 44, 44);
    transition: all 0.3s ease-in;
  }

  .nav-link {
    font-size: 1.5rem;
    font-weight: 300 !important;
    margin-bottom: 0px !important;
    cursor: pointer;
  }

  .change-nav {
    background-color: var(--mainBlue);
    color: black;
    box-shadow: 0px 0px 10px rgb(44, 44, 44);
    transition: all 0.3s ease-in;
  }

  .change-nav .logo {
    height: 50px;
    width: 100px !important;
  }

  .navbar .nav-link:hover {
    color: black;
  }

  .navbar-brand {
    padding-left: 10px;
    padding-right: 10px;
    color: white;
    font-size: 3rem;
  }

  .navbar-brand:hover {
    opacity: 0.7;
    transition: 0.5s all ease;
  }


  .nav-item {
    font-variant: small-caps !important;
    letter-spacing: 1px;
  }

  .nav-item::after {
    content: "";
    display: block;
    width: 0px;
    height: 2px;
    background-color: var(--mainWhite);
    transition: width 0.5s;
    
  }

  .nav-item:hover::after {
    width: 100%;
    transition: width 0.5s;
  }

  .show {
    transition: all 0.3s ease-in;
  }

  @media (max-width: 912px) {
    .logo, .change-nav .logo{
      height: 36px !important;
    }
  }
</style>