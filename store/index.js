  export const state=()=>({
    products:[]
  })

  export const mutations={
    saveProducts(state, products){
      state.products = products
    }
  }

  export const actions={
    fetchProducts(context){
      fetch("https://fakestoreapi.com/products")
      .then(response=>response.json())
      .then(
        response=> {
          console.log(response)
          context.commit("saveProducts", response)
        }
      )
    }
  }
