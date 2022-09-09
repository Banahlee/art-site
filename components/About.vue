<template>
  <div class="about-container mb-3 pt-4 container col-12 d-flex flex-wrap-reverse justify-content-center align-items-center">
    <div class="bio-container col-lg-9">
      <h1 class="title small-caps text-center my-3">{{ profile.title }}</h1>
        <div class=" max-100 my-2 col-lg-8 col-xs-12 d-flex align-items-center flex-wrap-reverse p-3">
          <div class="bio-text-container px-3 mb-2 max-100 col-lg-6">
            <p class="bio text-center">
              {{ profile.bio }}
            </p>        
          </div>
          <div class="profile-img-container max-100 d-flex justify-content-center align-items-center col-lg-6 col-xs-12 p-3">
            <img class="max-100" :src="require(`@/assets/img/profile/${profile.profileImg}`)" alt="">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data.json";
export default {
  data() {
    return {
      profile: data.profile,
    };
  },
};
</script>

<style scoped>
.about-container {
  padding: 200px inherit;
}

.bio-text-container {
  padding: 1rem;
}

.profile-img-container {
  max-height: 100% !important;
}

img {
  max-width: 70% !important;
  border: 0.25px solid white;
  box-shadow: 1px 10px 10px var(--shadowColor);
}

/* hr {
  border-top: 1px solid var(--mainBlue);
} */

@media (max-width: 991px) {
  img {
    max-height: 300px !important;
  }

  .title {
    font-size: 36px;
  }

  .title-name, hr {
    display: none;
  }
}

@media (min-width: 992px) {

  .about-container {
    height: 90vh;
  }

  .profile-img-container {
    max-height: 100% !important;
  }

  img {
    max-height: 600px !important;
    border: 0.25px solid white;
    box-shadow: 8px 8px 8px var(--shadowColor);
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