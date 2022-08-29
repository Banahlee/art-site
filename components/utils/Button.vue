<template>
  <div
    class="button-container m-0 p-0"
    :class="btnClasses"
    :style="btnStyles"
    @click="scrollTo('collections')"
  >
    <a class="d-flex align-items-center justify-content-center w-100 align-center text-decoration-none">
      <h1 class="d-flex align-items-end cta-text" :class="textClasses">
        {{text}}
      </h1>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      link: String,
      text: String,
      color: String,
      btnClasses: String,
      btnStyles: String,
      textClasses: String
    }
  }
</script>

<style scoped>
.button-container {
  background-color: whitesmoke;
  border: 1px solid whitesmoke;
  cursor: pointer;
}

.cta-text {
  font-weight: 600 !important;
  font-size: 1.25rem;
  letter-spacing: 1px;
  color: black;
  align-content: center;
}

.button-container:hover {
  background-color: transparent;
  color: whitesmoke;
  transition: all 0.5s ease;
}

.button-container:hover .cta-text {
  color: whitesmoke;
}

/* .button-container::after {
  content: "";
  display: block;
  width: 0px;
  height: 100%;
  background-color: black;
  transition: width 0.5s;
}

.button-container {
  width: 100%;
  transition: width 0.5s;
} */
</style>