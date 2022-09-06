export const state = () => ({
    currentProduct: {}
  })
  
  
  export const mutations = {
    SET_CURRENT_PRODUCT(state, product) {
      state.currentProduct = product;
    }
  }
  
  export const actions = {
    setCurrentProduct({ commit }, product){
      commit('SET_CURRENT_PRODUCT', product);
      return product;
    }
 }