export const state = () => ({
    currentProduct: {}
  })
  
  
  export const mutations = {
    setCurrentProduct(state, product) {
      state.currentProduct == product;
    }
  }
  
  export const actions = {
    setProductMutation(product){}
 }