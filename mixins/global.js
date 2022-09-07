export default {
  mounted() {
    this.currentProduct = this.$store.state.currentProduct;
  },
  methods: {
    scrollTo(destinationId) {
      document.getElementById(destinationId).scrollIntoView();
    }
  }
}