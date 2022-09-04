<template>
  <div class="about-container container col-12 d-flex flex-wrap-reverse justify-content-center align-items-center">
    <div class="bio-container my-5 col-lg-8 col-xs-12 d-flex align-items-center flex-wrap-reverse p-3">
      <div class="max-100 col-lg-6">
        <h1 class="title text-center text-white small-caps">{{ profile.title }}</h1>
        <p class="bio text-center text-white">
          {{ profile.bio }}
        </p>        
      </div>
      <div class="profile-img-container max-100 d-flex justify-content-center align-items-center col-lg-6 col-xs-12 p-3">
        <img class="max-100" :src="require(`@/assets/img/profile/${profile.profileImg}`)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data.json'
  export default {
    data() {
      return {
        profile: data.profile
      }
    }
  }
</script>

<style scoped>
  .about-container {
    padding: 200px inherit;
  }

  .bio-container {
    background-color: var(--mainBlue);
    border-radius: 10px;
    box-shadow: 5px 5px 5px var(--shadowColor);
  }

  .profile-img-container {
    max-height: 100% !important;
  }
  
  img {
    max-height: 800px !important;
    border: 0.25px solid white;
    /* border-radius: 10px; */
    /* box-shadow: 15px 15px rgb(255, 255, 255); */
  }

  @media (max-width: 912px) {
    img {
      max-height: 350px !important;
    }
  }

  @media (min-width: 1800px) {
    .title {
      font-size: 4rem;
    }

    .bio {
      font-size: 1.5rem;
    }
  }
</style>